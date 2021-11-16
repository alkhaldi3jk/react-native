import { makeAutoObservable } from "mobx";
import {instance} from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  isLoading=true

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
      console.log(this.shops)
      this.isLoading=false
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();
export default shopStore;

// axios.METHOD(URL, BODY)

// GET: Fetching Data
// axios.get("http://localhost:8000/api/shops");
// Return array of shops

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/shops", newObject);
// Returns a new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/shops/${ID}`, updatedObject);
// Returns updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/shops/${ID}`);
// Returns nothing
