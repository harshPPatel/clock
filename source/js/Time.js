/**
 * Represents Time for Clock
 *
 * @class Time
 */
class Time {

  /**
   * Creates an instance of Time and intitalizes variables.
   * @memberof Time
   */
  constructor() {

    // Creating new Date
    this._today = new Date();

    // Setting different time units
    this._hours = this._today.getHours();
    this._minutes = this._today.getMinutes();
    this._seconds = this._today.getSeconds();

    // Setting time period objects
    this.PERIOD = {
      AM: 'am',
      PM: 'pm',
    }

    // Setting class time period.
    this._period = this._hours > 12 ? this.PERIOD.PM : this.PERIOD.AM;
  }

  /**
   * Returns hours with 0 at first palce if hours is in single digit
   *
   * @returns Hours
   * @memberof Time
   */
  getHours() {
    if (this._hours <= 9) {
      return '0' + this._hours;
    } else {
      return this._hours;
    }
  }

  /**
   * Returns minutes with 0 at first palce if minutes is in single digit
   *
   * @returns Minutes
   * @memberof Time
   */
  getMinutes() {
    if (this._minutes <= 9) {
      return '0' + this._minutes;
    } else {
      return this._minutes;
    }
  }

  /**
   * Returns seconds with 0 at first palce if seconds is in single digit
   *
   * @returns Seconds
   * @memberof Time
   */
  getSeconds() {
    if (this._seconds <= 9) {
      return '0' + this._seconds;
    } else {
      return this._seconds;
    }
  }

  /**
   * Sets Page's body's background color according to the time. It changes its color to dark in night time else with the primary color.
   *
   * @memberof Time
   */
  setBackgroundColor() {
    if (this._hours > 20 && this._hours < 6) {
      document.body.style.backgroundColor = 'var(--dark-color)';
    } else {
      document.body.style.backgroundColor = 'var(--primary-color)';
    }
  }

  /**
   * Rerurns time in string format with the zone wrapped in 'span' tag and sets bodt's background color.
   *
   * @returns Time in string format
   * @memberof Time
   */
  getTime() {
    // Setting page's background color
    this.setBackgroundColor();

    // Returning the string formatted time.
    return this.getHours() + ':' + this.getMinutes() + ':' + this.getSeconds() + '<span>' + this._period + '</span>';
  }
}