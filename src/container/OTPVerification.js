// OTPVerification.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Background from './Background';

const OTPVerification = ({navigation, route}) => {
  const [otp, setOTP] = useState('');
  const {email} = route.params;

  const handleVerifyOTP = () => {
    // Verify the entered OTP with the one sent to the email
    // If OTP is correct, navigate to the Password Reset screen
    navigation.navigate('PasswordReset', {email});
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
        <Text style={styles.title}>OTP Verification</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="OTP"
            onChangeText={setOTP}
            value={otp}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.verifyOTPButton}
            onPress={handleVerifyOTP}>
            <Text style={styles.buttonText}>Verify OTP</Text>
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
    marginBottom: 30,
  },
  verifyOTPButton: {
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

export default OTPVerification;
