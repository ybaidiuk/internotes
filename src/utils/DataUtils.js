export function timeStampToFormatedData(timestamp) {
  const date = new Date(timestamp);
  return date.getDate() + '/' +
    (date.getMonth() + 1) + '/' +
    date.getFullYear() + ' ' +

    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes());
}

function addZero(int) {
  return int < 10 ? '0' + int : int;
}