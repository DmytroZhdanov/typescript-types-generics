/*
  Create a function (isWeekend) that takes a day of the week (from your enum)
  and returns a boolean value indicating whether it's a workday or a weekend.
*/

enum WeekDay {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

let isWeekend: (day: WeekDay) => boolean;

isWeekend = (day: WeekDay) => {
  if (day === WeekDay.Saturday || day === WeekDay.Sunday) {
    return true;
  } else {
    return false;
  }
};
