import React, { useState, useEffect } from "react";

import DragZone from "./DragZone";
import DropSpace from "./DropSpace";
import SelectedItems from "./SelectedItems";
import EditStyleModal from "./EditStyleModal";
import "./style.css";
import { config } from "./Config/config";

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [configData, setConfigData] = useState({
    x: 0,
    y: 0,
    text: "",
    fontSize: "16px",
    fontWeight: "normal",
    id: "",
  });

  useEffect(() => {
    // Save changes to local storage
    localStorage.setItem("droppedItems", JSON.stringify(droppedItems));
  }, [droppedItems]);

  const dragStart = (e, content, type) => {
  
    e.dataTransfer.setData("text/plain", JSON.stringify({ type, content }));
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const isJsonString = (data) => {
    try {
      JSON.parse(data);
      return true;
    } catch (e) {
      return false;
    }
  };
  const drop = (e) => {
    e.preventDefault();

    const dropArea = document.getElementById("drop_aera");
    if (e.clientX > dropArea.width || e.clientY > dropArea?.height) {
      return;
    }
    let type, content;
    if (isJsonString(e.dataTransfer.getData("text/plain"))) {
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));
      type = data?.type;
      content = data?.content;
    }

    const itemId = `${type}-${Date.now()}`;
    const draggedItem = config.find((item) => item.type === type);
   
    if (draggedItem === undefined) {
      const filterItem = droppedItems?.filter(
        (item) => item?.id !== selectedItem?.id
      );
      const clonseSelectedItem = JSON.parse(JSON.stringify(selectedItem));
      clonseSelectedItem.style.top = e.clientY + "px";
      clonseSelectedItem.style.left = e.clientX + "px";

     
      setDroppedItems([...filterItem, { ...clonseSelectedItem }]);
      //setSelectedItem(clonseSelectedItem); // Select the dropped item
    } else {
      if (draggedItem) {
        const newItem = {
          ...draggedItem,
          id: itemId,
          style: {
            top: `${e.clientY}px`,
            left: `${e.clientX}px`,
            fontSize: configData.fontSize,
            fontWeight: configData.fontWeight,
          },
        };
        
        setDroppedItems((prevItems) => [...prevItems, newItem]);
        setSelectedItem(newItem); // Select the dropped item
        setModalVisible(true); // Make the modal visible
      }
    }

    setConfigData({
      x: e.clientX + "px",
      y: e.clientY + "px",
      text: content,
      fontSize: "16px",
      fontWeight: "normal",
    });
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setConfigData({
      x: item.style.left + "",
      y: item.style.top + "",
      text: item.content,
      fontSize: item.style.fontSize || "16px", // Retrieve from item.style or provide default value
      fontWeight: item.style.fontWeight || "normal", // Retrieve from item.style or provide default value
    });
  };

  const deleteItem = () => {
    if (selectedItem) {
      const updatedItems = droppedItems?.filter(
        (item) => item.id !== selectedItem.id
      );
      setDroppedItems(updatedItems);
      setSelectedItem(null);
    }
  };

  const handleConfigInputChange = (property, value) => {
    setConfigData((prevConfig) => ({
      ...prevConfig,
      [property]: value,
    }));
  };

  const applyConfiguration = () => {
    if (selectedItem) {
    
      const updatedItems = droppedItems.map((item) =>
        item.id === selectedItem.id
          ? {
              ...item,
              content: configData.text,
              style: {
                ...item.style,
                top: configData.y,
                left: configData.x,
                fontSize: configData.fontSize,
                fontWeight: configData.fontWeight,
              },
            }
          : item
      );
      setDroppedItems(updatedItems);
      setModalVisible(false);
    }
    setModalVisible(false);
  };

  return (
    <>
      {/* <div style={{ display: 'flex',height:"auto" }}> */}
      <div className="drag-zone">
        <div style={{ backgroundColor: "#D3D3D3", width: "70%" }}>
          <DropSpace
            droppedItems={droppedItems}
            dragOver={dragOver}
            drop={drop}
            selectItem={selectItem}
            selectedItem={selectedItem}
            dragStart={dragStart}
            deleteItem={deleteItem}
          />
        </div>
        <div style={{ backgroundColor: "#36454F", width: "30%" }}>
          <DragZone
            data={config}
            dragStart={dragStart}
            selectItem={selectItem}
            selectedItem={selectedItem}
          />
          {selectedItem && (
            <SelectedItems
              selectedItem={selectedItem}
              deleteItem={deleteItem} // Ensure deleteItem is passed correctly
              setModalVisible={setModalVisible}
            />
          )}
        </div>
      </div>

      {modalVisible && (
        <div className="backdrop">
          <EditStyleModal
            configData={configData}
            handleConfigInputChange={handleConfigInputChange}
            applyConfiguration={applyConfiguration}
            setModalVisible={setModalVisible}
          />
        </div>
      )}
    </>
  );
};

export default Example;
