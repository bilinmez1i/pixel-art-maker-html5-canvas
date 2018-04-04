[Home](../README.md) | [Part 1](../Part1/part1.md) | [Part 3](../Part3/part3.md)

# Part 2

## Responding to User Events

In Part 1, we learn how to set up the canvas and draw lines and rectagles on it. In Part 2, we will be adding event listeners to DOM elements so that the user can change the canvas.

### Adding an Event Listener

The very first thing we need to do is to grab some elements from the DOM

```javascript
    const rowsInput = document.getElementById("rows-input");
    const colsInput = document.getElementById("cols-input");
    const submitBtn = document.getElementById("submit-btn");
```
*Note: we could have used "querySelector" to get the elements we wanted, but I just feel like "getElementById" reads better.*

Now that we have our elements, we can put an event listener on the submit button. For this step, we actually have a couple options (that is, without using jQuery).

```javascript

    //The textbook way
    submitBtn.addEventListnener("click", function(){
        alert("clicked!");
    })

    //Or ...

    submitBtn.onclick = function(){
        alert("clicked!");
    };
```

Because of its simplicity, we will be using the latter. One you have the event listener added, you now need to grab the value of the inputs.

```javascript
    submitBtn.click = function(){
        let numRows = rowsInput.value;
        let numCols = colsInput.value;

        console.log("Rows: " + numRows);
        console.log("Columns: " + numCols);
    };
```

Now, let's try to call the _makeGrid_ function...

```javascript
    submitBtn.click = function(){
        let numRows = rowsInput.value;
        let numCols = colsInput.value;

        console.log("Rows: " + numRows);
        console.log("Columns: " + numCols);

        makeGrid(numRows, numCols, "lightGray");
    };
```

Nothing happens. Nothing. Happens. How come nothing happened? Well, it just so happens that there are two reasons why the new grid wasn't drawn. The first being browser defaults.

### Browser Defaults

Okay, do me a favor and click the submit button one more time. This time, though, pay special attention to the input boxes. They went back to their default values, didn't they? That's because when a submit button is pressed, the default action is for the page to totally reload. If you press the button multiple times, you will see that it shows the console only being logged once because it was only logged to once since the page reloaded. Fortunately, there is a very simple fix to this...

```javascript
    submitBtn.click = function(event){
        event.preventDefault();

        let numRows = rowsInput.value;
        let numCols = colsInput.value;

        console.log("Rows: " + numRows);
        console.log("Columns: " + numCols);

        makeGrid(numRows, numCols, "lightGray");
    };
```
We just passed the event, which is an object, as a parameter of the function. Now, with the _event.preventDefault_ method, the browser will not automatically reload. However, depending on the browser, the grid may or may not be drawn.

### Type Coercion

 Above the other two _console.log_ commands, insert the following lines:

```javascript
console.log(typeof numRows);
console.log(numRows + 1);
```

Okay, if _numRows_ was 20, you should have gotten "string" as the first line of your output with "201" as the second line. Whenever you get the value of an input, its data type is always a string, even if the input type is "number." However, to parse it into a number, you simply:

```javascript
    let numRows = Number(rowsInput.value);
```

Now, when you log _numRows + 1_ to the console, you should get 21, and the event listener function should look like this...

```javascript
    submitBtn.click = function(event){
        event.preventDefault();

        let numRows = Number(rowsInput.value); //Because the input value is a string
        let numCols = Number(colsInput.value);

        makeGrid(numRows, numCols, "lightGray");
    };
```

### The Old Grid

Okay, now we have our new grid. Except is just drew the new grid over the old one. In order to get rid old grids, we just need to draw a rectangle over the entire canvas. 

```javascript
 ctx.fillStyle = "white"; 
 ctx.fillRect(0, 0, canvasWidth, canvasHeight);
```

So now, your _makeGrid_ function should look like this:

```javascript
    function makeGrid(numRows, numCols, color) {
    // Your code goes here!
    ctx.fillStyle = "white";//To clear the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = color || "black"; //I added the last part just in case color is undefined
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let width = canvasWidth / numCols;
    let height = canvasHeight / numRows;

    for (let i = width; i < canvasWidth; i += width) {
        drawLine(i, 0, i, canvasHeight);
    }

    for (let i = height; i < canvasHeight; i += height) {
        drawLine(0, i, canvasWidth, i);
    }

}
```

## In Conclusion

First, in order to prevent the page from reloading when the user clicks a submit button, you must pass the event object as a parameter of the function and then call its _preventDefault_ method. Then, values of inputs are strings that need to be parsed into numbers before working with them. 

In Part 3, we will be making the actual squares.

[Home](../README.md) | [Part 1](../Part1/part1.md) | [Part 3](../Part3/part3.md)