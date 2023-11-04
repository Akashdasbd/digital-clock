const clock = document.getElementById('clock')
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();





setInterval(() => {

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    let ampm = h > 12 ? "PM" : "AM";
    let hours = '';

    if (h == 0) {
        hours = 12;


    } else if (h > 0 && h <= 12) {

        hours = h
    } else {
        hours = h - 12

    }


    clock.innerHTML = `${girocal(hours)}:${girocal(m)}:${girocal(s)} ${ampm}`



}, 1000);