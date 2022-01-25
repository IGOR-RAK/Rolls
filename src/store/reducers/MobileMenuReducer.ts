import { IMobileMenu,MobileMenuAction,MobileMenuActionTypes } from './../../types/mobile_menu';


  
const initialState:IMobileMenu  = {
    isMobileMenu:false 
  };

  export const mobileMenuReducer = (
    state = initialState,
    action: MobileMenuAction
  ): IMobileMenu => {
    switch (action.type) {
        case MobileMenuActionTypes.OPEN_MOBILE_MENU:
          return {
            ...state,          
            isMobileMenu:true
          };
          case MobileMenuActionTypes.CLOSE_MOBILE_MENU:
            return {
              ...state,          
              isMobileMenu:false
            };
       
       
        default:
          return state;
      }
    }
  