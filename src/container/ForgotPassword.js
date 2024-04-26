// ForgotPassword.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Background from './Background';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    // Logic to send OTP to the provided email
    // You can implement this using your backend service
    // Once OTP is sent, navigate to OTP verification screen
    navigation.navigate('OTPVerification', {email});
  };
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Forgot Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.sendOTPButton}
            onPress={handleSendOTP}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 120,
  },
  inputContainer: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 50,
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  sendOTPButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backtext: {
    color: 'blue',
    fontSize: 16,
  },
});

export default ForgotPassword;
