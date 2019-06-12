class Time {
  constructor() {
    this._today = new Date();
    this._hours = this._today.getHours();
    this._minutes = this._today.getMinutes();
    this._seconds = this._today.getSeconds();
    this.PERIOD = {
      AM: 'am',
      PM: 'pm',
    }
    this._period = this._hours > 12 ? this.PERIOD.PM : this.PERIOD.AM;
  }

  getHours() {
    if (this._hours <= 9) {
      return '0' + this._hours;
    } 
    else {
      return this._hours;
    }
  }

  getMinutes() {
    if (this._minutes <= 9) {
      return '0' + this._minutes;
    }
    else {
      return this._minutes;
    }
  }

  getSeconds() {
    if (this._seconds <= 9) {
      return '0' + this._seconds;
    }
    else {
      return this._seconds;
    }
  }
   
   setBackgroundColor() {
      if (this._hours > 20 && this._hours < 6) {
         document.body.style.backgroundColor = 'var(--dark-color)';
      } 
      else {
         document.body.style.backgroundColor = 'var(--primary-color)';
      }
   }

  getTime() {
     this.setBackgroundColor();
    return this.getHours() + ':' + this.getMinutes() + ':' + this.getSeconds() + '<span>' + this._period + '</span>';
  }
}