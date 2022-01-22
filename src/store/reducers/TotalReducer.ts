import { ITotal, TotaActionTypes, TotalAction } from './../../types/total';

const initialState:ITotal  = {
    total: 0,
    cost: 0,
    transfer:5,
  };

  export const totalReducer = (
    state = initialState,
    action: TotalAction
  ): ITotal => {
    switch (action.type) {
      case TotaActionTypes.CHANGE_TOTAL:
        const current = state.cost + action.payload
        if (current < 40) {
           
        return {
          ...state,           
           cost: current,
           transfer:8,
           total: 0,
        };
        }

        return {
          ...state,          
           cost: current,
           transfer:0,
           total: current,
        };
     
     
      default:
        return state;
    }
  };