// import { memo } from "react";
// import { Form, InputGroup } from "react-bootstrap";
// import PropTypes from "prop-types";

// const Header = memo(({ search, handeleSearch }) => {
//   console.log("Header");
//   return (
//     <Form>
//       <InputGroup className="my-3">
//         <Form.Control
//           value={search}
//           onChange={handeleSearch}
//           placeholder="Searching"
//           aria-label="Searching"
//           aria-describedby="basic-addon2"
//         />

//        <div     className="select">
//        <Form.Select
//           required
      
//           name="Category"
//         >
//           <option value="">desk</option>
//           <option value="ask">ask</option>
//         </Form.Select>
//        </div>
//       </InputGroup>
//     </Form>
//   );
// });

// Header.propTypes = {
//   handeleSearch: PropTypes.func,
// };

// Header.displayName = "Header";

// export default Header;


// import { memo } from "react";
// import { Form, InputGroup } from "react-bootstrap";
// import PropTypes from "prop-types";

// const Header = memo(({ search, handleSearch, sortProductsByPrice }) => {
//   console.log("Header");
//   return (
//     <Form>
//       <InputGroup className="my-3">
//         <Form.Control
//           value={search}
//           onChange={handleSearch}
//           placeholder="Qidirish"
//           aria-label="Qidirish"
//           aria-describedby="basic-addon2"
//         />
//         <div className="select">
//           <Form.Select onChange={sortProductsByPrice} name="sort" aria-label="Sort">
//             <option value="">Tartiblash</option>
//             <option value="price">Narx bo'yicha</option>
//           </Form.Select>
//         </div>
//       </InputGroup>
//     </Form>
//   );
// });

// Header.propTypes = {
//   handleSearch: PropTypes.func,
//   sortProductsByPrice: PropTypes.func,
// };

// Header.displayName = "Header";

// export default Header;

import { memo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = memo(({ search, handleSearch, sortProductsByPrice }) => {
  console.log("Header");
  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    if (sortOption === "asc") {
      sortProductsByPrice("asc");
    } else if (sortOption === "desc") {
      sortProductsByPrice("desc");
    }
  };

  return (
    <Form>
      <InputGroup className="my-3">
        <Form.Control
          value={search}
          onChange={handleSearch}
          placeholder="Qidirish"
          aria-label="Qidirish"
          aria-describedby="basic-addon2"
        />
        <div className="select">
          <Form.Select onChange={handleSortChange} name="sort" aria-label="Sort">
            <option value="">Tartiblash</option>
            <option value="asc">ask</option>
      
          </Form.Select>
        </div>
      </InputGroup>
    </Form>
  );
});

Header.propTypes = {
  handleSearch: PropTypes.func,
  sortProductsByPrice: PropTypes.func,
};

Header.displayName = "Header";

export default Header;

