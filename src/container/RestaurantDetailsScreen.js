import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  AsyncStorage,
} from 'react-native';

const RestaurantDetailsScreen = ({route}) => {
  const {restaurantId} = route.params;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (itemId, itemName, itemPrice) => {
    const newItem = {id: itemId, name: itemName, price: itemPrice, quantity: 1};
    const existingItemIndex = cartItems.findIndex(item => item.id === itemId);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }
    await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const renderCartIcon = () => (
    <TouchableOpacity onPress={() => console.log('Navigate to Cart')}>
      {/* Replace the cart icon with your own image */}
      <Image source={require('../assets/cart.jpg')} style={styles.cartIcon} />
    </TouchableOpacity>
  );

  const foodItems = [
    {
      id: 1,
      name: 'Pizza',
      price: 10,
      image: require('../assets/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg'),
    },
    {id: 2, name: 'Burger', price: 8, image: require('../assets/burger.jpg')},
    {
      id: 3,
      name: 'Salad',
      price: 6,
      image: require('../assets/360_F_297135896_Y9HQ2k7WRIWj55l7LMSB6zQBh3KJ7aBV.jpg'),
    },
    // Add more food items here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Details Screen</Text>
      <Text style={styles.subtitle}>Restaurant ID: {restaurantId}</Text>
      {/* Render food items */}
      {foodItems.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
          <TouchableOpacity
            onPress={() => addToCart(item.id, item.name, item.price)}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}
      {/* Render cart icon */}
      {cartItems.length > 0 && renderCartIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 20,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cartIcon: {
    width: 24,
    height: 24,
    tintColor: '#007bff',
  },
});

export default RestaurantDetailsScreen;
