
class Clock {
  // Days and Month Array : Hint => https://www.w3schools.com/jsref/jsref_getmonth.asp
  // Input Type Object
  constructor() {
    this.TYPES = {
      Time: 'time',
      Date: 'date',
      Day: 'day',
      Month: 'month',
      Year: 'year',
    }

    this.DAYS = {
      MONDAY: 'Monday',
      TUESDAY: 'Tuesday',
      WEDNESDAY: 'Wednesday',
      THURSDAY: 'Thursday',
      FRIDAY: 'Friday',
      SATURDAY: 'Saturday',
      SUNDAY: 'Sunday',
    }

    this._today = new Date();

    this._intervals;
  } 

  addActiveClass(e, buttons) {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    e.target.classList.add('active');
  }

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

  getTime() {
    var time = new Time();
    return time.getTime();
  }

  getYear() {
    return this._today.getFullYear();
  }
  
  getMonth() {
    var month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return month[this._today.getMonth()];
  }
  
  getDate() {
    let date = this._today.getDate();
    let month = this._today.getMonth() + 1;
    let year = this._today.getFullYear();

    if (date < 10)
      date = '0' + date;
    if (month < 10)
      month = '0' + month;

    return date + '/' + month + '/' + year;
  }
  
  getDay() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[this._today.getDay()];
  }

  setTime(output, isTrue) {
    if (isTrue){
      setTimeout(this.setTime, 1000);
      this._intervals = setInterval(() => {
        document.getElementById('target').innerHTML = output();
      }, 1000);
    }
    else 
      clearTimeout(this._intervals);
  }
  
  setOutput(output, isTime) {
    document.getElementById('target').innerHTML = 'Loading...';
    if (isTime) {
      this.setTime(output, isTime);
    } else {
      this.setTime(isTime);
      document.getElementById('target').innerHTML = output;
    }
  }

  init () {
    this.addEventListeners();
  }
}