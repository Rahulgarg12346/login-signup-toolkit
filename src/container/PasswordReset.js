// PasswordReset.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Background from './Background';

const PasswordReset = ({navigation, route}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {email} = route.params;

  const handleResetPassword = () => {
    // Logic to reset password and update it in the backend
    // After successful password reset, navigate to the Login screen
    navigation.navigate('Login');
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
        <Text style={styles.title}>Reset Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            onChangeText={setNewPassword}
            value={newPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.resetPasswordButton}
            onPress={handleResetPassword}>
            <Text style={styles.buttonText}>Reset Password</Text>
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
  resetPasswordButton: {
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

export default PasswordReset;
