import React, { useState, useCallback } from "react";

export const ListTable = ({
  groceryList = [],
  selectItem,
  deSelectItem,
  removeItem,
}) => {
  const [ currentSelectIndex , setCurrentSelectIndex ] = useState(null);
  const handleRemoveItem = useCallback((index) => {
    removeItem(index);
  });
  const onSelect = useCallback((event, index) => {
    const { checked } = event.target;
    if(checked){
      setCurrentSelectIndex(index);
      selectItem(index)
    } else{
      setCurrentSelectIndex(null);
      deSelectItem(index)
    }
  });
  return (
    <div className="listTable">
      <table>
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Category</th>
            <th>Delivery Method</th>
          </tr>
        </thead>
        <tbody>
          {groceryList.length === 0 && (
            <tr>
              <td>No Data Available</td>
            </tr>
          )}
          {React.Children.toArray(
            groceryList.map((item, index) => (
              <tr>
                <td>
                  <button onClick={() => handleRemoveItem(index)}>X</button>
                  <input type="checkbox" onChange={(e) => onSelect(e, index)} checked={currentSelectIndex === index} />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.deliveryMethod}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
