const date0= new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2= new Date('42 03:24:00');

function getFormattedDate(dateObject) {

  let meDate = {
      weekday: 'long'
  }

  let my_data = {
      data: dateObject.getDate(),
      month: dateObject.getMonth() + 1,
      year: dateObject.getFullYear(),
      hours: dateObject.getHours(),
      minutes: dateObject.getMinutes(),
      weekday: dateObject.toLocaleString("en-US", meDate),
  }
  
  function hour(a) {
      return String(a).length === 1 ? '0' + a : a
  }
  return `${my_data.data}.${my_data.month}.${my_data.year} ${hour(my_data.hours)}:${hour(my_data.minutes)} ${my_data.weekday}`
}


  console.log(getFormattedDate(date0));
  console.log(getFormattedDate(date1));
  console.log(getFormattedDate(date2));