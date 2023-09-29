export function formatPeriod(hours, minutes) {
  hours = hours.toString();
  minutes = minutes.toString();
  if (hours.length === 2 && minutes.length === 2) {
    return `${hours}:${minutes}`;
  }
  let result = "";
  result += `${formatTimeUnit(hours)}:`;
  result += formatTimeUnit(minutes);
  return result;
}

function formatTimeUnit(num) {
  let result = "";
  num = num.toString();
  if (num.length === 1) {
    result += `0${num}`;
  } else {
    result += `${num}`;
  }
  return result;
}

export function formatTime(currTime) {
  const hours =
    currTime.getHours() > 12 ? currTime.getHours() % 12 : currTime.getHours();
  const minutes = currTime.getMinutes();
  const period = currTime.getHours() >= 12 ? "PM" : "AM";
  return `${formatPeriod(hours, minutes)} ${period}`;
}
