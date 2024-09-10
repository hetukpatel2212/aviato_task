import React, {useState, useEffect} from 'react';
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
import {BACK, ITEM, PROFILE} from '../../Assets/Images/Index';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const UpdatePet = ({route}) => {
  const {item} = route.params;

  const [petId, setPetId] = useState(item?.id || '');
  const [petName, setPetName] = useState(item?.name || '');
  const [status, setStatus] = useState(item?.status || 'available');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Available', value: 'available'},
    {label: 'Pending', value: 'pending'},
    {label: 'Sold', value: 'sold'},
  ]);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://petstore.swagger.io/v2/pet/${item.id}`,
        {
          name: petName,
          status: status,
        },
      );

      Alert.alert('Success', 'Pet updated successfully!');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Failed to update pet. Please try again.');
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
          <Text style={styles.headerName}>Update Pet</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Pet ID</Text>
          <Text style={styles.input}>{item.id}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.label}>Pet Name</Text>
          <TextInput
            style={styles.input}
            value={petName}
            onChangeText={setPetName}
            placeholder="Enter pet name"
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
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UpdatePet;
