import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTab from './Tab';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='HomeTab' component={MyTab} />
        <Stack.Screen name='Details' options={{title:'Tùy chỉnh ',headerTitleAlign:'center',}}  component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default AppStack