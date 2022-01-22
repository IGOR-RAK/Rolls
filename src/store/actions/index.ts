
import * as ProductCartActionCreators from "./product_cart";
import * as TotalActionCreators from "./total";
import * as ModalActionCreators from "./modal";


export default { 
  ...ProductCartActionCreators,
  ...TotalActionCreators,
  ...ModalActionCreators 

};