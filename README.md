## Color Box List

This app is a practice of React Forms. You can add and delete color boxes in this app. There are three basic components: `<Box />`, `<BoxList />` & `<NewBoxForm />`

### `BoxList.js`

It is the parent component which renders Boxes and the Form as well. It keeps track of all the color boxes in state.

### `Box.js`

Simply renders a div with the size and background colors passed to it as props.

### `NewBoxForm.js`

Takes **width, height, color** of the box as user input and passes it up to `<BoxList />`
