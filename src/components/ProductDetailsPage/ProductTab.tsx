import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "./About";
import Details from "./Details";

const enum Content {
  ABOUT = "About",
  DETAILS = "Details",
}

interface ProductTabProps {
  productMD: string;
  aboutSrc: [number, number];
}

const ProductTab = ({ productMD, aboutSrc }: ProductTabProps) => {
  const [currentContent, setCurrentContent] = useState(Content.ABOUT);
  const handleContentSwitch = (contentType: Content) => {
    setCurrentContent(contentType);
  };

  return (
    <>
      <Container fluid className="bg-gray pt-4">
        <Row
          className="d-flex justify-content-center text-center"
          style={{ margin: "0 8rem" }}
        >
          <Col
            sm={6}
            md={6}
            lg={6}
            className={
              currentContent === Content.ABOUT
                ? "active tab-nav d-block py-2"
                : "tab-nav d-block py-2"
            }
            onClick={() => handleContentSwitch(Content.ABOUT)}
          >
            About
          </Col>
          <Col
            sm={6}
            md={6}
            lg={6}
            className={
              currentContent === Content.DETAILS
                ? "active tab-nav d-block py-2"
                : "tab-nav d-block py-2"
            }
            onClick={() => handleContentSwitch(Content.DETAILS)}
          >
            Detail
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-light-grey px-5">
        {currentContent === Content.ABOUT ? (
          <About aboutSrc={aboutSrc}/>
        ) : (
          <Details productMD={productMD} />
        )}
      </Container>
    </>
  );
};

export default ProductTab;
