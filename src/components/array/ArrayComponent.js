import TableComponent from '../table/TableComponent';
import cssClass from './ArrayComponent.module.css';

const rowsData=[
    {
        "id":1,
        "name":"Saurabh",
        "age":34
    },{
        "id":2,
        "name":"Neha",
        "age":31
    },{
        "id":3,
        "name":"Ansh",
        "age":4
    },{
        "id":4,
        "name":"Anay",
        "age":3
    }
];
function ArrayComponent(props){
    return <div>
        <p>Array</p>
        <div>{
            rowsData? 
            <TableComponent rows={rowsData} />
            :<TableComponent rows={[]} />
        }</div>
    </div>
}

export default ArrayComponent;