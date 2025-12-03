import { clsx } from "clsx";
import { useEffect, useRef } from "react";
import { Animated, Pressable, Text, View } from "react-native";

interface YesNoSwitchProps {
  isToday: boolean;
  setIsToday: (value: boolean) => void;
}

export default function YesNoSwitch({ isToday, setIsToday }: YesNoSwitchProps) {
  const BUTTON_WIDTH = 80; // w-20 = 80px
  const translateX = useRef(
    new Animated.Value(isToday ? 0 : BUTTON_WIDTH)
  ).current;
  const yesOpacity = useRef(new Animated.Value(isToday ? 1 : 0.6)).current;
  const noOpacity = useRef(new Animated.Value(!isToday ? 1 : 0.6)).current;
  const yesScale = useRef(new Animated.Value(isToday ? 1 : 0.95)).current;
  const noScale = useRef(new Animated.Value(!isToday ? 1 : 0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: isToday ? 0 : BUTTON_WIDTH,
        friction: 8,
        tension: 100,
        useNativeDriver: true,
      }),
      Animated.timing(yesOpacity, {
        toValue: isToday ? 1 : 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(noOpacity, {
        toValue: !isToday ? 1 : 0.6,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(yesScale, {
        toValue: isToday ? 1 : 0.95,
        friction: 8,
        tension: 100,
        useNativeDriver: true,
      }),
      Animated.spring(noScale, {
        toValue: !isToday ? 1 : 0.95,
        friction: 8,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isToday, noOpacity, noScale, translateX, yesOpacity, yesScale]);

  return (
    <View className="flex flex-row self-start bg-gray-400 dark:bg-slate-800 rounded-xl overflow-hidden relative border border-gray-500">
      <Animated.View
        className="absolute bg-slate-600 rounded-xl h-full"
        style={{
          width: BUTTON_WIDTH,
          transform: [{ translateX }],
        }}
      />
      <Pressable
        className="rounded-xl overflow-hidden z-10"
        style={{ width: BUTTON_WIDTH }}
        onPress={() => {
          setIsToday(true);
        }}
      >
        <Animated.View
          style={{
            opacity: yesOpacity,
            transform: [{ scale: yesScale }],
          }}
        >
          <Text className={clsx(`py-4 px-4 text-center text-gray-300`)}>
            Yes
          </Text>
        </Animated.View>
      </Pressable>
      <Pressable
        className="rounded-xl overflow-hidden z-10"
        style={{ width: BUTTON_WIDTH }}
        onPress={() => {
          setIsToday(false);
        }}
      >
        <Animated.View
          style={{
            opacity: noOpacity,
            transform: [{ scale: noScale }],
          }}
        >
          <Text className={clsx(`py-4 px-4 text-center text-gray-300`)}>
            No
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}
