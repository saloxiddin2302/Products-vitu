import { useCallback, useState } from "react";
import { groups } from "../data/groups";
import { v4 as uuidv4 } from "uuid";

export const useForm = () => {
  const [validated, setValidate] = useState(false);
  // const [idCounter, setIdCounter] = useState(1);
  const [select, setSelect] = useState(null);

  const [product, setProduct] = useState({
    ProductName: "",
    Price: "",
    Category: groups[0],
    Quantity: "",
    Description: "",
  });

  const productJson = localStorage.getItem("product");
  const [products, setproducts] = useState(JSON.parse(productJson) || []);

  // usecalback

  const handleChange = useCallback(
    (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    },
    [product]
  );

  // usecalback

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      setValidate(true);
      if (e.currentTarget.checkValidity()) {
        // edit davom etmoqda

        let newProduct;
        if (select === null) {
          newProduct = [...products, product];
        } else {
          newProduct = products.map((el) => {
            if (el.id === select) {
              return product;
            } else {
              return el;
            }
          });
          setSelect(null);
        }

        // edit tugab qoldi

        setproducts(newProduct);
        localStorage.setItem("product", JSON.stringify(newProduct));

        setProduct({
          ProductName: "",
          Price: "",
          Category: groups[0],
          Quantity: "",
          Description: "",
          id: uuidv4(),
        });
        setValidate(false);
      }
    },
    [products, product, select]
  );

  // editProduct

  const editProduct = (id) => {
    let product = products.find((product) => product.id == id);
    setSelect(id);
    setProduct(product);
  };

  //editProduct 2 qisim

  //   delete

  const deleteDebt = (id) => {
    const deleteProduct = products.filter((el) => el.id !== id);
    setproducts(deleteProduct);
    localStorage.setItem("product", JSON.stringify(deleteProduct));
  };
  // delete end

  const sortProductsByPrice = useCallback(() => {
    const sortedProducts = [...products].sort((a, b) => a.Price - b.Price);
    setproducts(sortedProducts);
  }, [products]);

  return {
    validated,
    product,
    products,
    select,
    handleChange,
    submit,
    editProduct,
    deleteDebt,
    sortProductsByPrice,
  };
};
