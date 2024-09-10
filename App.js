import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MainNavigation from './src/Navigation/MainNavigation';
import Splash from './src/Screens/Splash/Index';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { syncDataWhenOnline } from './src/redux/slices/petSlice';

const App = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  const handleAnimationEnd = () => {
    setIsSplashScreen(false);
  };

  useEffect(() => {
    store.dispatch(syncDataWhenOnline());
  }, []);

  return (
    <View style={styles.container}>
      {isSplashScreen ? (
        <Splash onAnimationEnd={handleAnimationEnd} />
      ) : (
        <Provider store={store}>
          <MainNavigation />
        </Provider>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
