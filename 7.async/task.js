class AlarmClock {
  constructor(alarmCollection = [], intervalId = null) {
    this.alarmCollection = alarmCollection;
    this.intervalId = intervalId;
  }
  addClock(time, callback) {
    if (callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (time === null) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.includes(time) === true) {
      console.warn("Уже присутствует звонок на это же время");
    }
    let objectParameters = {
      callback,
      time,
      canCall: true,
    };
    this.alarmCollection.push(objectParameters);
  }
  removeClock(time) {
    let newAlarmCollection = this.alarmCollection.filter(
      element => element.time !== time);
     this.alarmCollection = newAlarmCollection;
  }
  getCurrentFormattedTime() {
    let newdate = new Date();
    let hours = newdate.getHours().toString().length < 2 ? '0' + newdate.getHours() : newdate.getHours();
    let minutes = newdate.getMinutes().toString().length < 2 ? '0' + newdate.getMinutes() : newdate.getMinutes();
    return `${hours}:${minutes}`;
  }
  start(intervalId) {
    if (intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((searchTime) => {
        if (this.getCurrentFormattedTime() === searchTime) {
          this.alarmCollection[canCall] = true;
        }
        if (this.alarmCollection[canCall] === true) {
          this.alarmCollection[canCall] = false;
          return this.alarmCollection[callback];
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    return (this.intervalId = null);
  }
  resetAllCals() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
    return this.alarmCollection;
    };
  
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
