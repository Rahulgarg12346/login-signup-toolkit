import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  // Function to handle navigation to a restaurant details page
  const goToRestaurantDetails = restaurantId => {
    // Navigate to the restaurant details page, passing the restaurant ID as a parameter
    navigation.navigate('RestaurantDetailsScreen', {restaurantId});
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Swiggy Logo */}
        <Image
          source={require('../assets/Swiggy_logo.png')} // You'll need to replace this with the actual logo image
          style={styles.logo}
        />

        {/* Featured Restaurants */}
        <Text style={styles.heading}>Featured Restaurants</Text>
        <TouchableOpacity onPress={() => goToRestaurantDetails(1)}>
          <View style={styles.restaurantContainer}>
            <Image
              source={require('../assets/Fried_Chicken_restaurant1.jpg')} // Replace with the image of the restaurant
              style={styles.restaurantImage}
            />
            <Text style={styles.restaurantName}>Fried_Chicken_restaurant</Text>
          </View>
          <View style={styles.restaurantContainer}>
            <Image
              source={require('../assets/restaurant1.jpg')} // Replace with the image of the restaurant
              style={styles.restaurantImage}
            />
            <Text style={styles.restaurantName}>Fried_momos_restaurant</Text>
          </View>
          <View style={styles.restaurantContainer}>
            <Image
              source={require('../assets/beach-side-restaurant-1-jpg.webp')} // Replace with the image of the restaurant
              style={styles.restaurantImage}
            />
            <Text style={styles.restaurantName}>Fried_Burger_restaurant</Text>
          </View>
          <View style={styles.restaurantContainer}>
            <Image
              source={require('../assets/resturant.jpg')} // Replace with the image of the restaurant
              style={styles.restaurantImage}
            />
            <Text style={styles.restaurantName}>Fried__restaurant</Text>
          </View>
          <View style={styles.restaurantContainer}>
            <Image
              source={require('../assets/restaurant1.jpg')} // Replace with the image of the restaurant
              style={styles.restaurantImage}
            />
            <Text style={styles.restaurantName}>Fried_Chicken_restaurant</Text>
          </View>
        </TouchableOpacity>
        {/* Add more featured restaurants here */}

        {/* More Options */}
        <Text style={styles.heading}>More Options</Text>
        {/* Add more categories or options here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  restaurantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  restaurantImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 40,
  },
  restaurantName: {
    fontSize: 16,
  },
});

export default HomeScreen;
