import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {BACK, CONTACT, EMAIL, ITEM} from '../../Assets/Images/Index';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../Assets/Common/CommonText';

const {height} = Dimensions.get('window');

const PetDetails = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      <View style={styles.imageContainer}>
        <Image source={ITEM} style={styles.image} resizeMode="cover" />
      </View>
      <TouchableOpacity
        style={styles.backIconView}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Image style={styles.backIcon} source={BACK} />
      </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <View style={styles.nameView}>
          <Text style={styles.detailsTextTitle}>Name: </Text>
          <Text style={styles.detailsText}>{item.name}</Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.detailsTextTitle}>Category: </Text>
          <Text style={styles.detailsText}>
            {item.category?.name ?? 'Not Available'}
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.detailsTextTitle}>Status: </Text>
          <Text style={styles.detailsText}>{item.status}</Text>
        </View>
        <View style={styles.contactView}>
          <TouchableOpacity style={styles.contactBtnView}>
            <Image style={styles.contactIcon} source={CONTACT} />
            <Text style={styles.contactIconText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactBtnView}>
            <Image style={styles.contactIcon} source={EMAIL} />
            <Text style={styles.contactIconText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: height / 2,
    position: 'absolute', 
    top: 0,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  detailsText: {
    color: '#000000',
    fontSize: 25,
    fontFamily: Fonts.INTER_Medium,
  },
  detailsTextTitle: {
    color: '#808080',
    fontSize: 25,
    fontFamily: Fonts.INTER_Medium,
  },
  backIconView: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  backIcon: {
    width: 50,
    height: 50,
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '80%',
    position: 'absolute',
    bottom: 10,
  },
  contactBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '55%',
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingVertical: 8,
  },
  contactIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
  contactIconText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: Fonts.INTER_Medium,
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '90%',
  },
});

export default PetDetails;
