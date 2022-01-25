import { IModal,ModalAction,ModalActionTypes } from './../../types/modal';


  
const initialState:IModal  = {
    visible:false 
  };

  export const modalReducer = (
    state = initialState,
    action: ModalAction
  ): IModal => {
    switch (action.type) {
        case ModalActionTypes.OPEN_MODAL:
          return {
            ...state,          
            visible:true
          };
          case ModalActionTypes.CLOSE_MODAL:
            return {
              ...state,          
              visible:false
            };
       
       
        default:
          return state;
      }
    }
  