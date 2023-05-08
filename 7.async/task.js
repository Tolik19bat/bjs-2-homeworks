class AlarmClock {
  constructor(alarmCollection = [], intervalid, callback, time, canCall = true) {
    this.alarmCollection = alarmCollection;
    this.intervalid = intervalid;
    this.callback = callback;
    this.time = time;
    this.canCall = canCall;
  }
  addClock(callback, time, canCall = true) {
    if (callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (time === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.includes(time) === true) {
      console.warn("Уже присутствует звонок на это же время");
    }
    let object = {
      callback,
      time,
      canCall,
    };
    this.alarmCollection.push(object);
    return this.alarmCollection;
  }
  removeClock(time) {
    let newAlarmCollection = this.alarmCollection.filter(function (element) {
      return element !== time;
    });
    return (this.alarmCollection = newAlarmCollection);
  }
  debugger;
  getCurrentFormattedTime() {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    return `${hours}:${minutes}`;
  }
  start(intervalid) {
    if(intervalid !== undefined) {
        return;
    }
  }
}
