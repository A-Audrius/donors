import { useEffect } from "react";
import { getAll } from "../helpers/get";


function ClientData() {
    const [items, setItems] = useState([]);

    const getAllItems = async ()=> {
        const items = await getAll();

        setItems(items)
    }

    useEffect(() => {
        getAllItems();
    }, [])

    return ( 
        <>
        <h2>Client data</h2>
        </>
     );
}

export default ClientData;





// import ItemTableRow from "./ItemTableRow.jsx";

// const ItemTable = (props) => {
//   const { items, setItems } = props;

//   const itemElements = items.map(item => <ItemTableRow key={item.id} item={item} setItems={setItems} />)

//   return (
//     <table className="table">
//       <thead>
//       <tr>
//         <th>Category</th>
//         <th>Name</th>
//         <th>Value</th>
//         <th>Quantity</th>
//         <th className="text-center">Actions</th>
//       </tr>
//       </thead>
//       <tbody>
//         {itemElements}
//       </tbody>
//     </table>
//   );
// };

// export default ItemTable;