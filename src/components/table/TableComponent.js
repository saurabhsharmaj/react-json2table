import RowComponent from "./RowComponent";
import cssClass from "./TableComponent.module.css";
function TableComponent(props) {
  function getHeaders(){
    return Object.keys(props.rows[0]);
  }

  return (
    <div>
      <h2>table</h2>
      <table border='1'>
      <thead>
      <tr>{getHeaders().map((o,i)=>{return  <th key={i}>{o}</th>})}</tr>
      </thead>
      <tbody>
        {
          console.log('row Data')
        }          
           {
             
            props.rows.map((rowdata,i)=>{
              console.log(rowdata);
              return <RowComponent rowdata={rowdata}/>           
            })
            }        
      </tbody>
      </table>
      
      <div><pre>{JSON.stringify(props.rows, null, 2) }</pre></div>
      
    </div>
  );
}

export default TableComponent;
