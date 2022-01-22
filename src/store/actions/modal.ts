import { ModalActionTypes } from '../../types/modal';

export const showModal  = ( ) => {
    return {type:ModalActionTypes.OPEN_MODAL}
   };
 export const hideModal  = ( ) => {
    return {type:ModalActionTypes.CLOSE_MODAL}
   };

