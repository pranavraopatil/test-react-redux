import React from "react";

const ListSelection = ({ isItemSelected, selectedItem }) => {
  if (!isItemSelected) {
    return (
      <div className="listSelection">
        <p data-testid="noitemselected">No item selected</p>
      </div>
    );
  }
  return (
    <div className="listSelection">
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{selectedItem.name}</td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>{selectedItem.category}</td>
          </tr>
          <tr>
            <th>Delivery method:</th>
            <td>{selectedItem.deliveryMethod}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListSelection;
