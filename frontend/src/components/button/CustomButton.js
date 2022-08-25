import React from "react";

const CustomButton = (props) =>{
    return (
        <button variant="container" className={props.className} onClick={props.handleButtonClick} type="submit">{props.title}</button>
    )
}

export default CustomButton;