import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export default useOrientation = () => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get("screen"));

  useEffect(() => {
    const onChange = (result) => {
      setScreenInfo(result.screen);
    };

    Dimensions.addEventListener("change", onChange);

    const subscription = Dimensions.addEventListener("change", onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return {
    ...screenInfo,
    isPortrait: screenInfo.height > screenInfo.width,
  };
};
