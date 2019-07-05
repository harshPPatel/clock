# Class Name - `Clock`

This class represents the Clock in the app. This class manages the click events of navigation items, showing value of selected unit.

### Variables
---
- **TYPES (Object)** - contains selection types. (Example: Time, day, date etc)
- **\_today -** contains current date for the app
- **\_intervals** - saves intervals for the class

### Contructor
---
Creates an instance of Clock and initializes the class level variables with values.

**Example :**

```javascript
// Example of using the function
var clock = new Clock();
```

### `addActiveClass` function
---
Adds active class to the selected nav items and removes the class from all other nav items.

**Parameters :**

- **e** - object : event object of clicked nav item....
- **buttons** - array : array of nav item buttons

**Return :**

- _none_

**Exceptions :**

- none

**Example :**

**Special Note :** This is special note to use this function....

```javascript
// Example of using the function

// Array of buttons
var buttons = document.getElementByClassName("nav-item");

buttons.forEach(button => {
  button.onClick = e => {
    // using function
    addActiveClass(e, buttons);
  };
});
```

### `addEventListeners` function
---
Adds event listeners to all nav links and adds on click function accoridng to its data-type value

**Parameters :**

- none

**Return :**

- none

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
addEventListeners();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `getTime` function
---
Creates new Time object and returns the time in string format

**Parameters :**

- none

**Return :**

- Time in string format

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
getTime();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `getYear` function
---
Returns the current full year

**Parameters :**

- none

**Return :**

- Full year

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
getYear();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `getMonth` function
---
Returns current month's full name

**Parameters :**

- none

**Return :**

- Full month name

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
getMonth();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `getDate` function
---
Returns Current date in string format. It adds 0 to single digit values of date units.

**Parameters :**

- none

**Return :**

- Current date in string format

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
getDate();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `getDay` function
---
Returns current day's full name

**Parameters :**

- none

**Return :**

- Current day's full name

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
getDay();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `setTime` function
---
If isTrue is true, than it sets interval in displays time in target element, otherwise it clears the class intervals

**Parameters :**

- **output** - Function : getTime function
- **isTrue** - Boolean : true if the function is called to get time, false otherwise

**Return :**

- none

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function

setTime(getTime, true);

/* OR */

setTime(getTime, false);
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `setOutput` function
---
Sets Output to the Target element

**Parameters :**

- **output** : string value or getTime function
- **isTrue** - Boolean : True if the function is called to get time, false otherwise

**Return :**

- none

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function

// Passing function
setOutput(getTime, true);

/* OR */

// Passing String values
setOutput("Monday", false);
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `setBackgroundColor` function
---
Sets Page's body's background color according to the time. It changes its color to dark in night time else with the primary color.

**Parameters :**

- none

**Return :**

- none

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
setBackgroundColor();
```

**Special Note :** This function is limited to class. It can be used inside class only!

### `init` function
---
Initializes the Clock Class and adds event listeners to all nav links and sets background image

**Parameters :**

- none

**Return :**

- none

**Exceptions :**

- none

**Example :**

```javascript
// Example of using the function
init();
```

**Special Note :** Call only this function to initializes the clock app. Create clock object and than call this function to initialize the function.

**Author** : [Harsh P Patel](https://github.com/harshPPatel)
