// utils/localStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToLocalStorage = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save data to local storage', error);
  }
};

export const getFromLocalStorage = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to get data from local storage', error);
  }
};

export const removeFromLocalStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove data from local storage', error);
  }
};
