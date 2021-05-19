// import update from 'immutability-helper';

const duckRoot = 'app/groceries/';

// Constants
export const ADD_ITEM = `${duckRoot}ADD_ITEM`;
export const REMOVE_ITEM = `${duckRoot}REMOVE_ITEM`;
export const SELECT_ITEM = `${duckRoot}SELECT_ITEM`;
export const DESELECT_ITEM = `${duckRoot}DESELECT_ITEM`;

export const initialState = {
  list: [
    {
      id: 66,
      name: 'Bananas',
      category: 'Fruit',
      deliveryMethod: 'Air',
    },
    {
      id: 16,
      name: 'Whole Grain Bread',
      category: 'Grains',
      deliveryMethod: 'Air',
    },
    {
      id: 100,
      name: 'Lettuce',
      category: 'Vegitable',
      deliveryMethod: 'Ground',
    },
    {
      id: 10,
      name: 'Roasted Turkey',
      category: 'Deli',
      deliveryMethod: 'Ground',
    },
  ],
  isItemSelected: false,
  selectedItem: {
    id: 0,
    name: '',
    category: '',
    deliveryMethod: '',
  },
};

// Reducers
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:{
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.list.push(payload)
      return stateCopy;
    }
      
    case REMOVE_ITEM:{
       // Write a custom reducer that will remove an item from the list array
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.list = state.list.filter((item, index) => index !== payload)
      return stateCopy;
    }
     

    case SELECT_ITEM: {
      // Write a custom reducer that will select an item
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.selectedItem = state.list[payload];
      stateCopy.isItemSelected= true;
      return stateCopy;
    }

    case DESELECT_ITEM: {
       // Write a customer reducer that will deselect an item
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy.selectedItem = initialState.selectedItem;
      stateCopy.isItemSelected= false;
      return stateCopy;
    }
     
    default:
      return state;
  }
};

// Action Creators
export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});
export const removeItem = index => ({
  type: REMOVE_ITEM,
  payload: index,
});
export const selectItem = index => ({
  type: SELECT_ITEM,
  payload: index,
});
export const deSelectItem = index => ({
  type: DESELECT_ITEM,
  payload: index,
});
