**Feature:**

1.The user can add elements by dragging and dropping them into the designated drop area.
2.When the user drops an element, they can customize the style and position by entering values in the visible modal.
3.Users can also modify the style by selecting an element and change its position by dragging it.
4.Users can delete an element by clicking the cross button.

**Stack Used:**
I have implemented all the code using JavaScript library react js 

**Drag and Drop Functions:**

dragStart: Triggered when dragging starts. It sets the data to be transferred during the drag operation.
dragOver: Prevents the default behavior of the dragover event.
isJsonString: Checks whether a given string is a valid JSON string.
drop: Handles the drop event. Parses the dropped data and adds a new item to droppedItems or updates the position of an existing item.
Change Position by Drag:

For this, I have used the mouse event clientX and clientY to determine the coordinates on the x and y axis.

**How to Run:**

Clone the code.
Install npm.
Run: npm start.

Feel free to adjust the formatting or let me know if you have any specific preferences!
