import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

import { useForm } from "../hooks/useForm";

const AdmenP = () => {
  const { validated, product, products, select, handleChange, submit, editProduct, deleteDebt, sortProductsByPrice } = useForm();

  const [search, setSearch] = useState("");

  // Qidirish funksiyasi
  const handleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.ProductName.toLowerCase().includes(search)
  );

  // Narx bo'yicha saralash
  const getSortedProducts = () => {
    return [...filteredProducts].sort((a, b) => a.Price - b.Price);
  };

  const sortedProducts = getSortedProducts();

  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={5}>
            <StudentForm
              product={product}
              handleChange={handleChange}
              submit={submit}
              validated={validated}
              select={select}
            />
          </Col>
          <Col lg={7}>
            <Header search={search} handleSearch={handleSearch} sortProductsByPrice={sortProductsByPrice} />
            <StudentTable products={sortedProducts} editProduct={editProduct} deleteDebt={deleteDebt} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AdmenP;
