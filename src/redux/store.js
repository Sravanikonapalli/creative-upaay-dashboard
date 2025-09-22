import { createStore } from "redux";
import rootReducer from "./rootReducer";

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("appState");
    if (!data) return undefined; // return undefined so reducer initialState is used
    return JSON.parse(data);
  } catch (e) {
    console.warn("Failed to load from localStorage", e);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("appState", serialized);
  } catch (e) {
    console.warn("Failed to save to localStorage", e);
  }
};

const persisted = loadFromLocalStorage();

const store = createStore(rootReducer, persisted);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
