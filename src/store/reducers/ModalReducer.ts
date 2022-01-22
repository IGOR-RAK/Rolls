import { IModal,ModalAction,ModalActionTypes } from './../../types/modal';


  
const initialState:IModal  = {
    showModal:false 
  };

  export const modalReducer = (
    state = initialState,
    action: ModalAction
  ): IModal => {
    switch (action.type) {
        case ModalActionTypes.OPEN_MODAL:
          return {
            ...state,          
            showModal:true
          };
          case ModalActionTypes.CLOSE_MODAL:
            return {
              ...state,          
              showModal:false
            };
       
       
        default:
          return state;
      }
    }
  