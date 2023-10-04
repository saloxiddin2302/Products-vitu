import { Button, FloatingLabel, Form, FormGroup } from "react-bootstrap";
import { groups } from "../data/groups";
import PropTypes from "prop-types";
import { memo } from "react";

const StudentForm = memo(
  ({ product, handleChange, submit, validated, select }) => {
    const { ProductName, Price, Category, Quantity, Description } = product;
    console.log("studentForm");
    return (
      <Form noValidate onSubmit={submit} validated={validated}>
        <FormGroup className="mt-3">
          <Form.Label>Product name</Form.Label>
          <Form.Control
            required
            name="ProductName"
            placeholder="Product name"
            type="text"
            value={ProductName}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label> Price</Form.Label>
          <Form.Control
            required
            name="Price"
            placeholder="Price"
            value={Price}
            onChange={handleChange}
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label>Category</Form.Label>

          <Form.Select
            required
            value={Category}
            onChange={handleChange}
            name="Category"
          >
            {groups.map((gr) => (
              <option key={gr} value={gr}>
                {gr}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <Form.Label> Quantity</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            value={Quantity}
            name="Quantity"
            placeholder="Quantity"
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill!
          </Form.Control.Feedback>
        </FormGroup>

        <FormGroup className="mt-3">
          <FloatingLabel controlId="floatingTextarea2" label="Description">
            <Form.Control
              name="Description"
              as="textarea"
              onChange={handleChange}
              value={Description}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
        </FormGroup>

        <Button className="mt-3" type="submit">
          {select ? "save" : "Add-Product"}
        </Button>
      </Form>
    );
  }
);

StudentForm.propTypes = {
  product: PropTypes.object,
  handleChange: PropTypes.func,
  submit: PropTypes.func,
  validated: PropTypes.bool,
  select: PropTypes.bool,
};

StudentForm.displayName = "StudentForm";

export default StudentForm;
