export interface ITotal {
    total: number;
    cost: number;
    transfer:number
  
 }

 export enum TotaActionTypes {
    CHANGE_TOTAL = "CHANGE_TOTAL",  
    
  }

  export interface changeTotal {
    type: TotaActionTypes.CHANGE_TOTAL;
    payload: number
    
  
  }

  export type TotalAction =
  changeTotal