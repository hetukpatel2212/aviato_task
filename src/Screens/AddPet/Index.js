import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import {BACK, PROFILE} from '../../Assets/Images/Index';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const AddPet = () => {
  const [categoryName, setCategoryName] = useState('');
  const [petName, setPetName] = useState('');
  const [status, setStatus] = useState('available');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Available', value: 'available'},
    {label: 'Pending', value: 'pending'},
    {label: 'Sold', value: 'sold'},
  ]);
  const navigation = useNavigation();
  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://petstore.swagger.io/v2/pet', {
        category: {
          name: categoryName,
        },
        name: petName,
        status: status,
      });

      Alert.alert('Success', 'Pet added successfully!');
      navigation.navigate('Home');
      setCategoryName('');
      setPetName('');
      setStatus('available');
    } catch (error) {
      Alert.alert('Error', 'Failed to add pet. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={styles.backIconView}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Image style={styles.backIcon} source={BACK} />
          </TouchableOpacity>
          <Text style={styles.headerName}>Add new pet</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Category Name</Text>
          <TextInput
            style={styles.input}
            value={categoryName}
            onChangeText={setCategoryName}
            placeholder="Enter category name"
            placeholderTextColor="#808080"
          />
        </View>
        <View style={styles.inputBox}>
        <Text style={styles.label}>Pet Name</Text>
        <TextInput
          style={styles.input}
          value={petName}
          onChangeText={setPetName}
            placeholder="Enter pet name"
            placeholderTextColor="#808080"
        />
        </View>
        <View style={styles.inputBox}>
        <Text style={styles.label}>Status</Text>
        <DropDownPicker
          open={open}
          value={status}
          items={items}
          setOpen={setOpen}
          setValue={setStatus}
          setItems={setItems}
          style={styles.dropdown}
          placeholder="Select status"
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPet;
