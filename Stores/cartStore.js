import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import  AsyncStorage  from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [
    {
      product: {
        _id: "6182a8b31bd7fa38942fdf23",
        name: "Cookie",
        price: 5,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 5,
    },
    {
      product: {
        _id: "6182a8b31bd7fa46652fdf88",
        name: "Another cookie",
        price: 15,
        image:
          "https://www.cookingclassy.com/wp-content/uploads/2014/06/chocolate-chip-cookie-16.jpg",
      },
      quantity: 3,
    },
  ];

  addItemToCart = async (product, quantity) => {
    try {
      const findItem = this.items.find(
        (item) => item.product._id === product._id
      );
      if (findItem) {
        findItem.quantity = quantity;
      } else {
        const newItem = {
          product: product,
          quantity: quantity,
        };
        this.items.push(newItem);
      }
      console.log(newItem);
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };

  // another solution
  // addItemToCart = (newItem) => {
  //   const foundItem = this.items.find(
  //     (item) => (item.product._id === newItem.product._id)
  //   );
  //   if (!foundItem) this.items.push(newItem);
  //   else foundItem.quantity = newItem.quantity;
  // };

  // computed value
  get totalItems() {
    let total = 0;
    this.items.forEach((item) => (total = total + item.quantity));
    return total;
  }

  // fetchCart = async () => {
  //   const items = await AsyncStorage.getItem("myCart");
  //   this.items = items ? JSON.parse(items) : [];
  // };

  removeItemFromCart = async (productId) => {
    this.items = this.items.filter((item) => item.product._id !== productId);
  };
}

const cartStore = new CartStore();
// cartStore.fetchCarts();
export default cartStore;
