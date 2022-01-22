
export interface IShopItem {
    id:number;
    img:string;
    title:string;
    set:number;
    weight:number;
    price:number  
 }



export interface IShopState {
    shop: IShopItem[];
  
 }