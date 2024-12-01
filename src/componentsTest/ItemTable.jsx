// import ClientDataTable from "./ClientItemTable";

const ItemTable = (props) => {
  const { items, setItems } = props;

  const itemElements = items.map(item => <ItemTableRow key={item.id} item={item} setItems={setItems} />)

  return (
    <table className="table">
      <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>age</th>
        <th>gender</th>
        <th>blood group</th>
      </tr>
      </thead>
      <tbody>
        {itemElements}
      </tbody>
    </table>
  );
};

export default ItemTable;