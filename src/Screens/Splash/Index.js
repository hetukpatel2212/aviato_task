import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
import {SPLASH} from '../../Assets/Images/Index';

const Splash = ({onAnimationEnd}) => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      onAnimationEnd();
    });
  }, [opacity]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={[styles.container, {opacity}]}>
        <Image style={styles.splashIcon} source={SPLASH} />
        <Text style={styles.spalshTitle}>Healthy Pets</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Splash;
