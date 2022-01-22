import { TotaActionTypes } from "../../types/total";

export const changeTotal  = (sum:number ) => {
    return {type:TotaActionTypes.CHANGE_TOTAL, payload:sum}
   };