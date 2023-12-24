import React from "react";
import "./style.css";

const DraggableItem = ({
  item,
  dragStart,
  deleteItem,
  selectItem,
  selectedItem,
}) => {
  return (
    <div
      key={item.id}
      id={item.id}
      draggable
      //onDragStart={(e) => dragStart(e, item.id, item.type)}
      onClick={() => selectItem(item)}
      style={{
        position: "absolute",
        display: "inline-block",
        padding: "3px",
        margin: "2px",
        top: item.style.top,
        left: item.style.left,
      }}
    >
      {item.type === "input" ? (
        <>
          <input
            type="text"
            placeholder={item.content}
            style={{
              ...item.style,

              border: selectedItem === item ? "2px solid red" : "none",
            }}
          />
          {selectedItem === item && (
            <span className="selected-Item" onClick={() => deleteItem()}>
              X
            </span>
          )}
        </>
      ) : (
        <>
          <button
            style={{
              ...item.style,
              border: selectedItem === item ? "2px solid red" : "none",
            }}
          >
            {item.content}
          </button>
          {selectedItem === item && (
            <span className="selected-Item" onClick={() => deleteItem()}>
              X
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default DraggableItem;
