import React, { useState } from "react";
import FurnitureList from "../FurnitureList";
import FurnitureDetails from "../FurnitureDetails";
import { furnitureFactory } from "../../PatternService/FactoryService";

const Factory = () => {
  const [furnitureList, setFurnitureList] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [color, setColor] = useState("");
  const [note, setNote] = useState("");
  const [price, setPrice] = useState("");

  const handleCreateFurniture = () => {
    const newFurniture = furnitureFactory.create(
      selectedType,
      color,
      note,
      price
    );
    setFurnitureList([...furnitureList, newFurniture]);
    setSelectedType("");
    setColor("");
    setNote("");
    setPrice("");
  };

  const furnitureTypes = ["Chair", "Table", "Bed"];

  return (
    <div>
      <h2 className="mt-3">Factory Pattern - Furniture Creator</h2>
      <p>
        <strong>Polish:</strong> Wzorzec projektowy Factory definiuje interfejs
        do tworzenia obiektów w klasie, pozostawiając podklasom decyzję o
        zmianie typu tworzonego obiektu.
      </p>
      <p>
        <strong>English:</strong> The Factory design pattern defines an
        interface for creating objects in a class, allowing subclasses to alter
        the type of objects that will be created.
      </p>
      <FurnitureDetails
        selectedType={selectedType}
        color={color}
        note={note}
        price={price}
        furnitureTypes={furnitureTypes}
        handleCreateFurniture={handleCreateFurniture}
        setSelectedType={setSelectedType}
        setColor={setColor}
        setNote={setNote}
        setPrice={setPrice}
      />
      <FurnitureList furnitureList={furnitureList} />
    </div>
  );
};

export default Factory;
