import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Text, View} from 'react-native';
import Home from '../Screens/Home/Index';
import AddPet from '../Screens/AddPet/Index';
import UpdatePet from '../Screens/UpdatePet/Index';
import {
  ADDACTIVE,
  ADDINACTIVE,
  HOMEACTIVE,
  HOMEINACTIVE,
} from '../Assets/Images/Index';
import {Fonts} from '../Assets/Common/CommonText';
import PetDetails from '../Screens/PetDetails/Index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarLabel = ({focused, label}) => {
  return (
    <View>
      <Text style={{color: focused ? '#818AF9' : 'gray'}}>{label}</Text>
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UpdatePet"
        component={UpdatePet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PetDetails"
        component={PetDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          let imageSource;

          if (route.name === 'HomeStack') {
            imageSource = focused ? HOMEACTIVE : HOMEINACTIVE;
          } else if (route.name === 'AddPet') {
            imageSource = focused ? ADDACTIVE : ADDINACTIVE;
          }

          return (
            <Image
              source={imageSource}
              style={{
                width: size,
                height: size,
                tintColor: color,
              }}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: Fonts.INTER_Medium,
        },
        tabBarActiveTintColor: '#818AF9',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({ route }) => {
          const routeName = route.state ? route.state.routes[route.state.index].name : '';
          
          return {
            headerShown: false,
            tabBarLabel: props => <CustomTabBarLabel {...props} label="Home" />,
            tabBarStyle: (routeName === 'UpdatePet') ? { display: 'none' } : {},
          };
        }}
      />
      <Tab.Screen
        name="AddPet"
        component={AddPet}
        options={{
          headerShown: false,
          tabBarLabel: props => (
            <CustomTabBarLabel {...props} label="Add Pet" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
