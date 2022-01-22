import { IShopState } from "../../types/shop";




const initialState:IShopState = {
    shop:[
      {
        id:1,
        img:"img/roll/philadelphia.jpg",
        title:"Philadelphia Hit Roll",
        set:6,
        weight:180,
        price:10
    },
    {
      id:2,
      img:"img/roll/california-tempura.jpg",
      title:"California Tempura",
      set:6,
      weight:205,
      price:9
    },
    {
      id:3,
      img:"img/roll/california-hit.jpg",
      title:"California Hit",
      set:6,
      weight:180,
      price:8
    },
    {
      id:4,
      img:"img/roll/zapech-california.jpg",
      title:"Baked roll California",
      set:6,
      weight:234,
      price:7
    },
    ]
  };
  
  export const shopReducer = (
    state = initialState,
    action: any
  ): IShopState => {
    switch (action.type) {    
      default:
        return state;
    }
  };