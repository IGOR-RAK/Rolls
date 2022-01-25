import { MobileMenuActionTypes } from '../../types/mobile_menu';

export const showMobileMenu  = ( ) => {
    return {type:MobileMenuActionTypes.OPEN_MOBILE_MENU}
   };
 export const hideMobileMenu  = ( ) => {
    return {type:MobileMenuActionTypes.CLOSE_MOBILE_MENU}
   };