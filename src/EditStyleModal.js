import "./style.css";
const EditStyleModal = ({
  configData,
  handleConfigInputChange,
  applyConfiguration,
  setModalVisible,
}) => {
  return (
    <div className="modal_position">
      <div className="modal_conatiner">
        <div className="edit_Element">Edit Element</div>
        <label>
          Text:
          <input
            type="text"
            className={"input"}
            value={configData.text}
            onChange={(e) => handleConfigInputChange("text", e.target.value)}
          />
        </label>
        <br />
        <label>
          X Position:
          <input
            type="number"
            className={"input"}
            value={(configData.x || "").replace("px", "")}
            onChange={(e) =>
              handleConfigInputChange("x", e.target.value + "px")
            }
          />
        </label>
        <br />
        <label>
          Y Position:
          <input
            className={"input"}
            type="number"
            value={(configData.y || "").replace("px", "")}
            onChange={(e) =>
              handleConfigInputChange("y", e.target.value + "px")
            }
          />
        </label>
        <br />

        <label>
          Font Size:
          <input
            type="text"
            className={"input"}
            value={configData.fontSize}
            onChange={(e) =>
              handleConfigInputChange("fontSize", e.target.value)
            }
          />
        </label>
        <br />
        <label>
          Font Weight:
          <input
            type="text"
            className={"input"}
            value={configData.fontWeight}
            onChange={(e) =>
              handleConfigInputChange("fontWeight", e.target.value)
            }
          />
        </label>
        <br />
        <button className="form_button" onClick={applyConfiguration}>
          Save
        </button>
        <button
          className="form_cancel_button"
          onClick={() => setModalVisible(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditStyleModal;
