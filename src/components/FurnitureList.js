import React from "react";
import { ListGroup, Col, Row } from "react-bootstrap";

const FurnitureList = ({ furnitureList }) => (
  <Row className="mt-3">
    <Col>
      <h4>Created Furniture List:</h4>
      <ListGroup>
        {furnitureList.map((furniture, index) => (
          <ListGroup.Item key={index}>
            Type: {furniture.type}, Color: {furniture.color}, Note:{" "}
            {furniture.note}, Price: {furniture.price}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  </Row>
);

export default FurnitureList;
