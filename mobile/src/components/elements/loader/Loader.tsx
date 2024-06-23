import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";

import Colors from "@/constants/Colors";

const Loader = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      rotateAnim.setValue(0);
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true
        })
      ).start();
    };

    startRotation();
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"]
  });

  const rotatingStyle = {
    transform: [{ rotate: rotateInterpolate }]
  };

  return (
    <Animated.View style={[styles.loader, rotatingStyle]} className='h-6 w-6' />
  );
};

const styles = StyleSheet.create({
  loader: {
    borderWidth: 10,
    borderColor: "#fff",
    borderTopColor: "transparent",
    borderRadius: 50
  }
});

export default Loader;
