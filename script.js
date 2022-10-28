const fetchName = fetch("becode.json");
console.log(fetchName);
const ul = document.createElement("ul");
const li = document.createElement("li");
document.body.appendChild(ul);
ul.appendChild(li);
//const request = fetch('document.txt')

const btnc = document.querySelector('input');
//const list = ul.appendChild(li);

const liste = function () {
    btnc.addEventListener('click', listbecode);

    for (let i = 0; i < array.length; i++) {

        ul.appendChild(li);
        li.innerHTML = li.innerHTML + array[i];
    }
}


