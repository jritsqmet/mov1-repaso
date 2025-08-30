import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen( {navigation} ) {
  return (
    <ImageBackground 
        style={styles.container}
        source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/23833.jpg" }} 
    >
      
      <Text>HomeScreen</Text>
      <Button title='ir a Juegos' onPress={ ()=> navigation.navigate("Tab") }/>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})