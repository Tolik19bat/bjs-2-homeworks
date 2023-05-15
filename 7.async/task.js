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
    let newAlarmCollection = this.alarmCollection.filter(function (
      elementTime
    ) {
      return elementTime !== time;
    });
    this.alarmCollection = newAlarmCollection;
  }
  getCurrentFormattedTime() {
    let newDate = new Date();
    let hours = newDate.getHours(0, 0);
    let minutes = newDate.getMinutes(0, 0);
    let worldTime = `${hours}:${minutes}`;
    return worldTime;
  }
  start(intervalId) {
    if (intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((searchTime) => {
        if (this.getCurrentFormattedTime === searchTime) {
          return this.alarmCollection.canCall = true;
        }
        if (this.alarmCollection.canCall === true) {
          this.alarmCollection.canCall = false;
          return this.alarmCollection.callback;
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCals() {
    this.alarmCollection.forEach(() => {
      return (this.alarmCollection.canCall = true);
    });
  }
  clearAlarms() {
    this.stop;
    this.alarmCollection = [];
  }
}
