[Home](../README.md) | [Part 1](../Part1/part1.md) | [Part 3](../Part3/part3.md)

# Part 2

## Responding to User Events

In Part 1, we learn how to set up the canvas and draw lines and rectagles on it. In Part 2, we will be adding event listeners to DOM elements so that the user can change the canvas.

## Adding an Event Listener

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
        console.log("clicked!");
    })

    //Or ...

    submitBtn.onclick = function(){
        console.log("clicked!");
    };
```

Because of its simplicity, we will be using the latter.