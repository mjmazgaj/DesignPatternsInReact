import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const FurnitureDetails = ({
  selectedType,
  color,
  note,
  price,
  furnitureTypes,
  handleCreateFurniture,
  setSelectedType,
  setColor,
  setNote,
  setPrice,
}) => (
  <>
    <Row className="mb-3">
      <Col>
        <Form.Label>Select Furniture Type:</Form.Label>
        <Form.Control
          as="select"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select Type</option>
          {furnitureTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Form.Control>
      </Col>
    </Row>
    <Row className="mb-3">
      <Col>
        <Form.Label>Color:</Form.Label>
        <Form.Control
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </Col>
      <Col>
        <Form.Label>Note:</Form.Label>
        <Form.Control
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Col>
      <Col>
        <Form.Label>Price:</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Col>
    </Row>
    <Button variant="primary" onClick={handleCreateFurniture}>
      Create Furniture
    </Button>
  </>
);

export default FurnitureDetails;
