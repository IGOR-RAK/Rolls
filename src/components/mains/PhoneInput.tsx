import React from 'react';
import { useForm } from "react-hook-form";
import { useActions } from "../../hooks/useActions";

interface IFormInput {   
   phone: string;   
  }
 

const PhoneInput:React.FC = () => {
    const {showModal} = useActions();
   
    const {
        register,
        handleSubmit,        
        formState: { errors }
      } = useForm<IFormInput>();
    
      const onSubmit = (data: IFormInput) => {
        console.log(data)
        showModal()
      };
   
    return ( 
   
    <div className='phone'>
        <div className="phone__title">Finish your order</div>  
        
        <form className="phone__form" onSubmit={handleSubmit(onSubmit)} >
      
      <input className="phone__input" placeholder="Mobile number" {...register("phone", {required: true, pattern: /^\d{9}$/ })} />
      {errors?.phone?.type === "pattern" && (
        <p className='phone__error'>Please enter a valid phone number</p>
      )}
      {errors?.phone?.type === "required" && (
        <p className='phone__error'>Please enter phone number</p>
      )}
     
      <input type="submit" className='phone__btn'  value="Send"/>
    </form>
        
       
    </div>);
}

export  {PhoneInput};
