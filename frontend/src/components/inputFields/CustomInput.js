import React from "react";
import './custominput.css'
const CustomInput = (props)=>{
    return(
        <div className="col-4">
          <div className="group">
           <input type={props.type} required className={props.className} placeholder={props.placeholder} id={props.id} name={props.name}/>
           <label htmlFor={props.id}>{props.name}</label> 
          </div>
       </div>
    )
}

export default CustomInput;