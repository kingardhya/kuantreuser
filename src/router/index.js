import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home, TambahKontak, DetailKontak, EditKontak} from '../pages'

const Stack = createStackNavigator ();

const index = () => {
    return ( 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="TambahKontak" component={TambahKontak} options={{ headerShown: true }} />
        <Stack.Screen name="DetailKontak" component={DetailKontak} options={{ headerShown: true }} />
        <Stack.Screen name="EditKontak" component={EditKontak} options={{ title: 'Edit Kontak'}} />
      </Stack.Navigator>
    )
}

export default index
