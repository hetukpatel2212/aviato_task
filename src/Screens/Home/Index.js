import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPets} from '../../redux/slices/petSlice';
import styles from './style';
import {PROFILE, SEARCH, BANNER, ITEM} from '../../Assets/Images/Index';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {pets, loading, error} = useSelector(state => state.pets);
  const [selectedFilter, setSelectedFilter] = useState('available');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterPress = filter => {
    setSelectedFilter(filter.toLowerCase());
  };

  useEffect(() => {
    dispatch(fetchPets(selectedFilter));
  }, [selectedFilter, dispatch]);

  const filterPets = () => {
    const query = searchQuery.toLowerCase();
    return pets.filter(pet => pet.name?.toLowerCase().includes(query));
  };

  const isSelected = filter => selectedFilter === filter.toLowerCase();

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}
      />
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>
            Please check your internet connection.
          </Text>
          <FlatList
            data={filterPets()}
            style={{width: '100%'}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemView}
                onPress={() => navigation.navigate('PetDetails', {item})}>
                <Image style={styles.itemImg} source={ITEM} />
                <View>
                  <View style={styles.nameView}>
                    <Text style={styles.itemTitle}>Name:</Text>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </View>
                  <View style={styles.nameView}>
                    <Text style={styles.itemTitle}>Category:</Text>
                    <Text style={styles.itemName}>
                      {item.category?.name ?? 'Not Available'}
                    </Text>
                  </View>
                  <View style={styles.nameView}>
                    <Text style={styles.itemTitle}>Status:</Text>
                    <Text style={styles.itemStatus}>{item.status}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerName}>Hello, Human!</Text>
          <Image style={styles.profileIcon} source={PROFILE} />
        </View>

        <View style={styles.searchView}>
          <Image style={styles.searchIcon} source={SEARCH} />
          <TextInput
            style={styles.textInputBox}
            placeholder="Find your favourite animal..."
            placeholderTextColor="#ADACAD"
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />
        </View>
        <View style={styles.filterBtnView}>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => handleFilterPress('Available')}>
            <LinearGradient
              colors={
                isSelected('Available')
                  ? ['#818AF9', '#8495FA']
                  : ['#F6F6F6', '#F6F6F6']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.gradientFilter}>
              <Text
                style={[
                  styles.filterBtnText,
                  {color: isSelected('Available') ? '#ffffff' : '#000000'},
                ]}>
                Available
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => handleFilterPress('Pending')}>
            <LinearGradient
              colors={
                isSelected('Pending')
                  ? ['#818AF9', '#8495FA']
                  : ['#F6F6F6', '#F6F6F6']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.gradientFilter}>
              <Text
                style={[
                  styles.filterBtnText,
                  {color: isSelected('Pending') ? '#ffffff' : '#000000'},
                ]}>
                Pending
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => handleFilterPress('Sold')}>
            <LinearGradient
              colors={
                isSelected('Sold')
                  ? ['#818AF9', '#8495FA']
                  : ['#F6F6F6', '#F6F6F6']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.gradientFilter}>
              <Text
                style={[
                  styles.filterBtnText,
                  {color: isSelected('Sold') ? '#ffffff' : '#000000'},
                ]}>
                Sold
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {filterPets().length === 0 ? (
          <Text style={styles.noResultsText}>No pets available</Text>
        ) : (
          <FlatList
            data={filterPets()}
            style={{width: '100%'}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemView}
                onPress={() => navigation.navigate('PetDetails', {item})}>
                <Image style={styles.itemImg} source={ITEM} />
                <View>
                  <View style={styles.nameView}>
                    <Text style={styles.itemTitle}>Name:</Text>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </View>
                  <View style={styles.nameView}>
                    <Text style={styles.itemTitle}>Category:</Text>
                    <Text style={styles.itemName}>
                      {item.category?.name ?? 'Not Available'}
                    </Text>
                  </View>
                  <View style={styles.nameView}>
                    <Text style={styles.itemTitle}>Status:</Text>
                    <Text style={styles.itemStatus}>{item.status}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
