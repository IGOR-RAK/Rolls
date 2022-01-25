export interface IMobileMenu {
    isMobileMenu:boolean
}

export enum MobileMenuActionTypes {
    OPEN_MOBILE_MENU = "OPEN_MOBILE_MENU",
    CLOSE_MOBILE_MENU = "CLOSE_MOBILE_MENU",   
  }

  export interface openMobileMenu {
    type: MobileMenuActionTypes.OPEN_MOBILE_MENU ;

  }

  export interface closeMobileMenu {
    type: MobileMenuActionTypes.CLOSE_MOBILE_MENU;
  
  }

  export type MobileMenuAction =
  | openMobileMenu
  | closeMobileMenu