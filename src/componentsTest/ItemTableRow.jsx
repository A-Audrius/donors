// import {deleteOne} from "../../helpers/delete.js";
import {Link} from "react-router";

const ItemTableRow = (props) => {
  const { item, setItems } = props;
  const { id, firstname, lastname, age, gender, bloodgroup } = item;

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;

    try {
      await deleteOne(id);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
    }
   }

  return (
    <tr>
      <td className="capitalize">{firstname}</td>
      <td>{lastname}</td>
      <td>${age}</td>
      <td>{gender}</td>
      <td>{bloodgroup}</td>
      <td className="flex gap-4 justify-center">
        <Link className="link-info" to={`edit/${id}`}>Edit</Link>
        <button onClick={handleDelete} className="link-error">Delete</button>
      </td>
    </tr>
  );
};

export default ItemTableRow;