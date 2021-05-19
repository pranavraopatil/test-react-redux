import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  addItem,
  removeItem,
  selectItem,
  deSelectItem,
} from "../ducks/groceries";

import ListInputs from "./ListInputs";
import ListSelection from "./ListSelection";
import ListTable from "./ListTable";

const mapStateToProps = ({ groceries }) => ({
  groceryList: groceries.list,
  selectedItem: groceries.selectedItem,
  isItemSelected: groceries.isItemSelected,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addItem,
      removeItem,
      selectItem,
      deSelectItem,
    },
    dispatch
  );

class ListContainer extends Component {
  componentWillMount() {
    /* eslint-disable no-console */
    console.log("groceryList", this.props.groceryList, this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("groceryList", nextProps.groceryList, this);
  }

  render() {
    const {
      addItem,
      groceryList,
      isItemSelected,
      selectedItem,
      selectItem,
      removeItem,
      deSelectItem,
    } = this.props;
    return (
      <section className="groceryApp">
        <div className="listInputs">
          <ListInputs addItem={addItem} />
        </div>
        <div className="types">
          <ListSelection
            isItemSelected={isItemSelected}
            selectedItem={selectedItem}
          />
          <ListTable
            groceryList={groceryList}
            selectItem={selectItem}
            removeItem={removeItem}
            deSelectItem={deSelectItem}
          />
        </div>
      </section>
    );
  }
}

ListContainer.propTypes = {
  // Props
  // Actions
  addItem: PropTypes.func.isRequired,
  selectItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  deSelectItem: PropTypes.func.isRequired,
  // Store
  groceryList: PropTypes.array.isRequired,
  isItemSelected: PropTypes.bool.isRequired,
  selectedItem: PropTypes.object.isRequired,
  // Other
};

const ListContainerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);

export default ListContainerRedux;
