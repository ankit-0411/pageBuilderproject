import React from "react";
import DraggableItem from "./DraggableItem";
import "./style.css";
import icon from "./assests/images.png";

const DragZone = ({
  data,
  dragStart,
  selectItem,
  deleteItem,
  selectedItem,
}) => {
  const x = () => {
    console.log("clicked");
  };
  return (
    <div style={{ marginRight: "20px" }}>
      <div className="text">BLOCKS</div>
      <div>
        {data.map((item) => (
          <Item
            item={item}
            dragStart={dragStart}
            selectItem={x}
            deleteItem={deleteItem}
            selectedItem={selectedItem}
          />
        ))}
      </div>
    </div>
  );
};

const Item = ({ dragStart, selectItem, item }) => (
  <div
    draggable
    onDragStart={(e) => dragStart(e, item.content, item.type)}
    onClick={() => selectItem(item)}
    style={{
      display: "flex",
      alignItems: "center",
      padding: "3px",
      margin: "2px",
      top: item.style.top,
      left: item.style.left,
      ...item?.style,
    }}
  >
    <img src={icon} style={{ width: "20px", height: "20px" }} />
    {item.content}
  </div>
);

export default DragZone;
