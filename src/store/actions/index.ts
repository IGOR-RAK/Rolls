
import * as ProductCartActionCreators from "./product_cart";
import * as TotalActionCreators from "./total";
import * as ModalActionCreators from "./modal";
import * as MobileMenuActionCreators from "./mobile_menu";


export default { 
  ...ProductCartActionCreators,
  ...TotalActionCreators,
  ...ModalActionCreators,
  ...MobileMenuActionCreators

};