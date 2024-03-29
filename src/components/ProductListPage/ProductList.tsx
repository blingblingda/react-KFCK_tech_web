import ProductCard from "../UI/Card/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { ProductFull } from "../../models/product";

interface ProductListProps {
  filteredItems: ProductFull[];
}

const chunkArray = (array: ProductFull[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const ProductList = ({ filteredItems }: ProductListProps) => {
  const rows: ProductFull[][] = chunkArray(filteredItems, 3);

  return (
    <Container>
      {rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((product) => (
            <Col key={product.id} sm={12} md={4} lg={4} className="my-3">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default ProductList;
