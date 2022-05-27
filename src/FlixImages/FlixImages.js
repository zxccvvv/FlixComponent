import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Dimensions, Image, View } from "react-native";

const window = Dimensions.get("window");

export default FlixImages = (props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [source, setSource] = useState(props.source);

  const tempPropsWidth = useRef(props.width).current;
  const tempPropsHeight = useRef(props.height).current;

  const SetSize = (size) => {
    if (props.width && !props.height)
      setHeight(size.height * (props.width / size.width));
    else if (!props.width && props.height)
      setWidth(size.width * (props.height / size.height));
    else {
      setWidth(window.width);
      setHeight(size.height * (window.width / size.width));
    }
    setIsLoading(false);
  };

  const InitImage = () => {
    let isSourceURL = typeof source === "string";
    if (isSourceURL) {
      Image.getSize(
        source,
        (width, height) => SetSize({ width, height }),
        (err) => {
          console.error(err);
          setIsError(true);
          setIsLoading(false);
        }
      );
    } else {
      const detailSource = Image.resolveAssetSource(
        source || require("./errorImage.png")
      );
      SetSize(detailSource);
    }
  };

  useEffect(() => {
    InitImage();
  }, [source]);

  useEffect(() => {
    if (isError) {
      setSource(require("./errorImage.png"));
    }
  }, [isError]);

  useEffect(() => {
    if (tempPropsWidth !== props.width || tempPropsHeight !== height)
      InitImage();
  }, [props.width, props.height]);

  const RenderWithLoading = ({ children }) => {
    if (isLoading) {
      return (
        <View
          style={[
            {
              width,
              height,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ccc",
            },
            props.style,
          ]}
        >
          <ActivityIndicator size={"large"} color="orangered" />
        </View>
      );
    } else {
      return children;
    }
  };

  if (props.children)
    return (
      <RenderWithLoading>
        <Image
          source={typeof source === "string" ? { uri: source } : source}
          style={[{ width, height }, props.style]}
          imageStyle={[{ width, height }, props.imageStyle]}
          blurRadius={props.blurRadius}
        >
          {props.children}
        </Image>
      </RenderWithLoading>
    );
  else {
    return (
      <RenderWithLoading>
        <Image
          source={typeof source === "string" ? { uri: source } : source}
          style={[{ width, height }, props.style]}
        />
      </RenderWithLoading>
    );
  }
};
