import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Colors from '../Themes/Colors';
import SearchScreen from '../Screens/SearchScreen';
import CartScreen from '../Screens/CartScreen';
import ShareScreen from '../Screens/ShareScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ApplicationStyles from '../Themes/ApplicationStyles';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          borderTopWidth: 0,
          height: hp(10),
          paddingTop: hp(3),
        },
        tabBarActiveTintColor: Colors.pink,
        tabBarInactiveTintColor: Colors.white,
        tabBarBackground: () => (
          <LinearGradient
            colors={['rgba(255,255,255,0)', '#000000']}
            style={styles.linearGradient}></LinearGradient>
        ),
      }}>
      <Tab.Screen
        name="Discover"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Icons/discovery/discovery.png')}
              style={[
                ApplicationStyles.iconImage,
                {tintColor: focused ? Colors.pink : Colors.white},
              ]}
            />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Icons/serach/serach.png')}
              style={[
                ApplicationStyles.iconImage,
                {tintColor: focused ? Colors.pink : Colors.white},
              ]}
            />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Icons/share/share.png')}
              style={[
                ApplicationStyles.iconImage,
                {tintColor: focused ? Colors.pink : Colors.white},
              ]}
            />
          ),
        }}
        name="Share"
        component={ShareScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Icons/cart/cart.png')}
              style={[
                ApplicationStyles.iconImage,
                {tintColor: focused ? Colors.pink : Colors.white},
              ]}
            />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../Icons/profile/profile.png')}
              style={[
                ApplicationStyles.iconImage,
                {tintColor: focused ? Colors.pink : Colors.white},
              ]}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="TabHome"
          component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
