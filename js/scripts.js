// let keys ={};

// document.addEventListener("keydown", pressKeyOn);
// document.addEventListener("keydown", pressKeyOff);

// function pressKeyOn(event){
//     // console.dir(event);
//     event.preventDefault();
//     keys[event.key] = true;
//     // keys += [event.key];  This will let you record all of the kyes pressed in the array.
//     console.log(keys);
// }
// function pressKeyOff(e){
//     // console.dir(e);
//     event.preventDefault();
//     keys[e.key] = false;
//     console.log(keys);
// }

//This code interacts with the input button

const ele = document.querySelector('input');

ele.addEventListener("keypress", addItem);

function addItem(event){
    console.log(event);
    document.querySelector('h1').textContent = ele.value;
}
