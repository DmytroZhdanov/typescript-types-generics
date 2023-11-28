/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
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
