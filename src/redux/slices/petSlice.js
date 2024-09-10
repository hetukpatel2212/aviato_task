import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const petSlice = createSlice({
  name: 'pets',
  initialState: {
    pets: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPetsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPetsSuccess(state, action) {
      state.pets = action.payload;
      state.loading = false;
    },
    fetchPetsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addPet(state, action) {
      state.pets.push(action.payload);
    },
    syncDataWhenOnline(state, action) {

    },
  },
});

export const { fetchPetsStart, fetchPetsSuccess, fetchPetsFailure, addPet, syncDataWhenOnline } = petSlice.actions;

export default petSlice.reducer;
export const fetchPets = (status) => async (dispatch) => {
  dispatch(fetchPetsStart());
  try {
    const cachedPets = await AsyncStorage.getItem(`pets_${status}`);
    if (cachedPets) {
      dispatch(fetchPetsSuccess(JSON.parse(cachedPets)));
    } else {
      const response = await axios.get('https://petstore.swagger.io/v2/pet/findByStatus', {
        params: { status },
      });
      await AsyncStorage.setItem(`pets_${status}`, JSON.stringify(response.data));
      dispatch(fetchPetsSuccess(response.data));
    }
  } catch (error) {
    const cachedPets = await AsyncStorage.getItem(`pets_${status}`);
    if (cachedPets) {
      dispatch(fetchPetsSuccess(JSON.parse(cachedPets)));
    } else {
      dispatch(fetchPetsFailure(error.message));
    }
  }
};
