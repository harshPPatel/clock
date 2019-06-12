/**
 * Represents a Clock
 *
 * @class Clock
 */
class Clock {

  /**
   * Creates an instance of Clock.
   * @memberof Clock
   */
  constructor() {

    // Input Types Object
    this.TYPES = {
      Time: 'time',
      Date: 'date',
      Day: 'day',
      Month: 'month',
      Year: 'year',
    }

    // Create new Date object
    this._today = new Date();

    // Saves intervals of the class
    this._intervals = null;
  }

  /**
   * Adds active class to the nav links
   *
   * @param {*} e Event of the clicked link
   * @param {*} buttons array of all buttons
   * @memberof Clock
   */
  addActiveClass(e, buttons) {
    // Removing active class from all buttons
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    // Adding active class
    e.target.classList.add('active');
  }

  /**
   * Adds event listeners to all nav links and adds on click function accoridng to its data-type value
   *
   * @memberof Clock
   */
  addEventListeners() {
    const buttons = document.querySelectorAll('.nav-links');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.addActiveClass(e, buttons);
        if (event.target.dataset.type == this.TYPES.Time)
          this.setOutput(this.getTime, true);
        else if (event.target.dataset.type == this.TYPES.Date)
          this.setOutput(this.getDate(), false);
        else if (event.target.dataset.type == this.TYPES.Day)
          this.setOutput(this.getDay(), false);
        else if (event.target.dataset.type == this.TYPES.Month)
          this.setOutput(this.getMonth(), false);
        else if (event.target.dataset.type == this.TYPES.Year)
          this.setOutput(this.getYear(), false);
      })
    });
  }

  /**
   * Creates new Time object and returns the time in string format
   *
   * @returns
   * @memberof Clock
   */
  getTime() {
    // Creating new Time object
    var time = new Time();

    // Returning the time
    return time.getTime();
  }

  /**
   * Returns the current full year
   *
   * @returns The Current Full Year
   * @memberof Clock
   */
  getYear() {
    return this._today.getFullYear();
  }

  /**
   * Reuturns current month's full name
   *
   * @returns Current Month Name
   * @memberof Clock
   */
  getMonth() {
    // Array list of month names
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', ];

    // Returns month name
    return month[this._today.getMonth()];
  }

  /**
   * Retunrs Current date in string format
   *
   * @returns Current Date
   * @memberof Clock
   */
  getDate() {
    // Current Date
    let date = this._today.getDate();
    let month = this._today.getMonth() + 1;
    let year = this._today.getFullYear();

    // Adding 0 before single digits
    if (date < 10)
      date = '0' + date;
    if (month < 10)
      month = '0' + month;

    // Returning the date
    return date + '/' + month + '/' + year;
  }

  /**
   * Returns current day's name
   *
   * @returns Name of the Current Day
   * @memberof Clock
   */
  getDay() {
    // Array of days names
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Returning the day name
    return days[this._today.getDay()];
  }

  /**
   * If isTrue is true, than it sets interval in displays time in target element, otherwise it clears the class interfvals
   *
   * @param {*} output getTime function
   * @param {*} isTrue true if the function is called to get time, false otherwise 
   * @memberof Clock
   */
  setTime(output, isTrue) {
    if (isTrue) {
      // Sets interval for each 1 second
      this._intervals = setInterval(() => {
        document.getElementById('target').innerHTML = output();
      }, 1000);
    } else {
      // Clearning Timeout
      clearTimeout(this._intervals);
    }
  }

  /**
   * Sets Output to the Target element
   *
   * @param {*} output string value or getTime function
   * @param {*} isTime True if the function is called to get time, false otherwise
   * @memberof Clock
   */
  setOutput(output, isTime) {
    // Replacing target element's innerHTML with 'Loading...'
    document.getElementById('target').innerHTML = 'Loading...';

    if (isTime) {
      // Setting time
      this.setTime(output, isTime);
    } else {
      this.setTime(isTime);
      document.getElementById('target').innerHTML = output;
    }
  }

  /**
   * Initializes the Clock Class and adds event listeners to all nav links
   *
   * @memberof Clock
   */
  init() {
    // Adding event listeners
    this.addEventListeners();
  }
}