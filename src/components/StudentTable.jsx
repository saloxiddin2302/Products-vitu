import React, { memo } from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";

const StudentTable = memo(({ products, editProduct, deleteDebt }) => {
  console.log("StudentTable");

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>ProductName</th>
          <th>Price</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Description</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(
          ({ ProductName, Price, Category, Quantity, Description, id }, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{ProductName}</td>
              <td>{Price}</td>
              <td>{Category}</td>
              <td>{Quantity}</td>
              <td>{Description}</td>
              <td className="text-end">
                <button
                  className="btn btn-primary me-3"
                  onClick={() => editProduct(id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteDebt(id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
});

StudentTable.propTypes = {
  products: PropTypes.array,
  editProduct: PropTypes.func,
  deleteDebt: PropTypes.func,
};

StudentTable.displayName = "StudentTable";

export default StudentTable;
