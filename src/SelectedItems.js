import React from 'react';
import "./style.css"


const SelectedItems = ({ selectedItem, setModalVisible }) => {
  console.log("#selectedItem",selectedItem)
  console.log("setModal",setModalVisible)
  return (
    <div>
      <div className='text'>SELECTED ELEMENT</div>
      <div>
        {selectedItem && (
          <>
            {selectedItem.type === 'input' ? (
              <input type="text" placeholder={selectedItem.content} readOnly style={selectedItem.style} />
            ) : (
              <button className='selected_button'>{selectedItem.content}</button>
            )}
          </>
        )}
      </div>
      <button className='selected_button' onClick={() => setModalVisible(true)}>Edit Style</button>
    </div>
  );
};


export default SelectedItems;


