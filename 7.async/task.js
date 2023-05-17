class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    let repeatedCall = this.alarmCollection.some((elementTime) => {
      return elementTime === time;
    });
    if (repeatedCall === true) {
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
    this.alarmCollection = this.alarmCollection.filter(
      (element) => element.time !== time
    );
  }
  getCurrentFormattedTime() {
    let newdate = new Date();
    let hours =
      newdate.getHours().toString().length < 2
        ? "0" + newdate.getHours()
        : newdate.getHours();
    let minutes =
      newdate.getMinutes().toString().length < 2
        ? "0" + newdate.getMinutes()
        : newdate.getMinutes();
    return `${hours}:${minutes}`;
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarmProperty) => {
        if (
          alarmProperty.time === this.getCurrentFormattedTime() &&
          alarmProperty.canCall === true
        ) {
          alarmProperty.canCall = false;
          alarmProperty.callback();
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    return (this.intervalId = null);
  }
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
