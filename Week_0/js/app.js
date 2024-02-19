/*
* Create A digital Clock.
* */

let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let ampm = document.getElementById("ampm");
let wish = document.getElementById("wish");

setInterval( () => {
  let time = new Date();
  let arr = new Date().toDateString().split(' ');
  let hours = time.getHours();
  let amPm = hours >= 12 ? "PM" : "AM";
  let wishes = hours < 12 ? 'Good Morning' : (hours >=12 && hours < 17) ? 'Good Noon' : 'Good Evening';
  hours = hours % 12;
  if(hours === 0)
  {
    hours =12;
  }
  wish.innerHTML = wishes;
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours;
  mins.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  sec.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
  ampm.innerHTML = amPm;
  date.innerHTML = time.getDate();
  month.innerHTML = arr[1];
  year.innerHTML = time.getFullYear();
}, 1000);

/*
* Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
* */

const arr = [1, 2, 3, 4, 5];
arr.forEach((x) => {
  console.log("x : "+x);
  setTimeout(() =>
    console.log(x), 3000*x)
});

/*
* Create Counter using closure.
* */

function counter(){
  let num = 0;
  return function increase(){
    console.log(num);
    num++;
  }
}

let func = counter();
func();
func();
func();
func();
