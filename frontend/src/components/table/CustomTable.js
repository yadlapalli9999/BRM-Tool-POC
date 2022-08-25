import React from "react";

const CustomTable = (props)=>{
    return(
      <table>
        <thead>
            <tr>{
                Object.keys([0]).map(header=>(
                    <th>{header}</th>
                ))
                }
            </tr>
        </thead>
        <tbody>
            {
                props.map(row=>(
                    <row column={row}/>
                ))
            }
            
        </tbody>
      </table>
    )
}

export default CustomTable;