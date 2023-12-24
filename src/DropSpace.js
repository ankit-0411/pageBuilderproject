import React from "react";
import DraggableItem from "./DraggableItem";

const DropSpace = ({
  droppedItems,
  dragOver,
  drop,
  selectItem,
  selectedItem,
  dragStart,
  deleteItem,
}) => {
    console.log("droppedItems>>>", droppedItems);
  return (
    <div
      id="drop_aera"
      style={{  position: "relative", height: "100vh" }}
      onDragOver={dragOver}
      onDrop={drop}
    >
      {droppedItems.map((item) => {
        return (
          <DraggableItem
            key={item.id}
            item={item}
            selectItem={selectItem}
            selectedItem={selectedItem}
            dragStart={dragStart}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default DropSpace;
