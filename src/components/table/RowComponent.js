import { useState } from "react";
import ColumnComponent from "./ColumnComponent";

function RowComponent(props){
   
  

return <tr>{
    Object.keys(props.rowdata).map(function (element) {
      return (
       
          <ColumnComponent coldata={props.rowdata[element]}/>
         
      );
    })
  }</tr>
}

export default RowComponent;