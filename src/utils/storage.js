import AsyncStorage from '@react-native-async-storage/async-storage';
export const setAuth = async (value) => {
  try {
    await AsyncStorage.setItem('user', value);
  } catch { }
};
export const getAuth = async () => {
  try {
    return AsyncStorage.getItem('user');
  } catch {
    return '';
  }
};
export const removeAuth = async ()=> {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) { }
};
