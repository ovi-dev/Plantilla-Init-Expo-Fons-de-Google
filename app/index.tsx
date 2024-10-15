import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react'

const App = () => {
  return (

    <SafeAreaView>

    <View className=' mt-8 mx-4'>
      <Text className=' font-trabajo-negro text-3xl font-bold text-blue-700'>Paguina Inicial de la app</Text>
      <Text className=' font-trabajo-clara text-3xl font-bold text-blue-700'>Paguina Inicial de la app</Text>
      <Text className=' font-trab text-3xl font-bold text-blue-700'>Paguina Inicial de la app</Text>
      <Text className=' ' style={{ fontSize: 50}}>Paguina Inicial de la app</Text>
    </View>

    </SafeAreaView>

  )
}

// /constante que se puede exportat a toda la app
//  export   
 const colores = {
  darkGray:  '#383737',
  linghGray: '#a39f9e',
  orange:    '#ff9427',

  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
  
  

}
// forma de estilos react Native
const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colores.background
},

row:{
    flexDirection:"row",
    justifyContent:"center",
    marginBottom: 19,
    paddingHorizontal:10
},

contenedorCalcu: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end"
},

})

export default App