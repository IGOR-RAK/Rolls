export interface IModal {
    showModal:boolean
}

export enum ModalActionTypes {
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",   
  }

  export interface openModal {
    type: ModalActionTypes.OPEN_MODAL;

  }

  export interface closeModal {
    type: ModalActionTypes.CLOSE_MODAL;
  
  }

  export type ModalAction =
  | openModal
  | closeModal