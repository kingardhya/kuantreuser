import * as React from "react";

import Router from './router';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}
