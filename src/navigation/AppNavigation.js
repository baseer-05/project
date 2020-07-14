import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screen/MainScreen';

// create stack navigation option
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}




export default AppNavigator;