// Login.js
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
import {loginStart, loginFailure, loginSuccess} from '../slices/authSlice'; // Import loginFailure
import Background from './Background';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    if (!email.trim().toLowerCase().endsWith('@gmail.com')) {
      Alert.alert('Error', 'Please enter a valid Gmail email address');
      return;
    }
    console.log('Login data:', {email, password}); // Log signup data

    dispatch(loginStart()); // Dispatching loginStart action

    // Simulating login process with setTimeout
    setTimeout(() => {
      // Hardcoded for demonstration
      if (password === password) {
        // Dispatch loginSuccess action if login is successful
        dispatch(loginSuccess());
        Alert.alert('Success', 'Logged in successfully', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('HomeScreen'), // Navigate to login screen
          },
        ]);
        // You can navigate to another screen or perform any further actions here
      } else {
        // Dispatch loginFailure action if login fails
        dispatch(loginFailure('Invalid password'));
        Alert.alert('Error', 'Invalid password');
      }
      setEmail('');
      setPassword('');
    }, 1000); // Simulating API call delay
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const navigateToLogin = () => {
    navigation.navigate('Signup'); // Navigate to the Login screen
  };
  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backtext}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
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
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={loading}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.Gologin}>
            you have no account?
            <Text onPress={navigateToLogin} style={styles.GoLink}>
              Signup
            </Text>
          </Text>
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
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
  loginButton: {
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
  Gologin: {
    textAlign: 'center',
    marginTop: 10,
  },
  GoLink: {
    color: 'blue',
    fontSize: 15,
  },

  forgotPasswordText: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Login;
