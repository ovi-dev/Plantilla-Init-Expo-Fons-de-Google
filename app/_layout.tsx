import {Slot, SplashScreen} from "expo-router";
// Import your global CSS file
import "./global.css"

import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync()

const RootApp = () => {

 const [ fontsLoaded, error] = useFonts({
      'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
      'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
      'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    });
      useEffect(() => {
    
        if (error) 
          throw error
        if (fontsLoaded) SplashScreen.hideAsync() 

       }, [fontsLoaded, error])
      
    if (!fontsLoaded && !error) return null
      
    
    
    return (

      <Slot/>
    )

  
}

export default RootApp