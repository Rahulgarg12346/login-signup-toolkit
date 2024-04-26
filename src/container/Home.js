import React from 'react'
import { View, Text } from 'react-native'
import Background from './Background';
import { darkgreen } from './Constant';
import Btn from './btn'

const Home = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal:40,marginVertical:100}}>
      <Text style={{color:'black',fontSize:65}}>App</Text>
      <Text style={{color:'black',fontSize:50, marginBottom:40, fontWeight:'bold'}}>Login / Signup </Text>
      </View>
      <Btn bgColor={darkgreen} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")}/>
      <Btn bgColor='white' textColor={darkgreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")}/>
    </Background>
  )
}

export default Home