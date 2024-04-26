// Signup.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signupStart, signupSuccess} from '../slices/authSlice'; // Import signupSuccess
import Background from './Background';
import {Link, useNavigation} from '@react-navigation/native';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  const handleSignup = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    console.log('Signup data:', {name, email, password}); // Log signup data

    dispatch(signupStart()); // Dispatching signupStart action

    // Simulating signup process with setTimeout
    setTimeout(() => {
      // Here you would make an API call to your backend to perform the signup process
      // Upon success, dispatch signupSuccess action
      dispatch(signupSuccess()); // Dispatch signupSuccess action
      Alert.alert('Success', 'Signed up successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'), // Navigate to login screen
        },
      ]);
      // You can navigate to another screen or perform any further actions here
      setName('');
      setEmail('');
      setPassword('');
    }, 1000); // Simulating API call delay
  };

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const navigateToLogin = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };
  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Signup</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setName}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignup}
            disabled={loading}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Text style={styles.Gologin}>
            Already have an account?{' '}
            <Text onPress={navigateToLogin} style={styles.GoLink}>
              LOGIN
            </Text>
          </Text>
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
    fontSize: 50,
    marginVertical: 100,
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
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: 'green',
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
    zIndex: 1,
    color: 'blue',
  },
  backtext: {
    color: 'blue',
    fontSize: 16,
  },
  Gologin: {
    textAlign: 'center',
    marginTop: 10,
  },
  GoLink: {
    color: 'blue',
    fontSize: 15,
  },
});

export default Signup;
