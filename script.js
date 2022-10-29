
fetch('becode.json')
    .then(res => console.log(res.json()))
    .then(json => {
        document.body(HTMLElement);
        const btnc = document.getElementById('btnc');
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const bbt = function lis() {
            btnc.addEventListener('click', (MouseEvent) => {
                for (let i = 0; i < array.length; i++) {
                    ul.appendChild(li);
                    //li.innerHTML = li.innerHTML + array[i].innerHTML;
                    li = li.innerHTML + array[i].innerHTML
                }
                const body = document.body.appendChild(ul);
                const list = ul.appendChild(li).innerHTML;



                document.body.appendChild(list)
            })
                .catch(error => {
                    console.log('There was an error!', error)
                })
        }
    }




/*fetch('document.txt')
.then(response => response.text())
.then(text => {
  const p = document.createElement('p')
  p.textContent = text

  document.body.appendChild(text)
})
.catch(error => {
  console.log('There was an error!', error)
})*/





/*const fetchName = fetch("becode.json");
fetch("becode.js").then(Response=> )
//console.log(fetchName);
alert("bonjour");
const ul = document.createElement("ul");
const li = document.createElement("li");
const body = document.body.appendChild(ul);
const list = ul.appendChild(li);
//const request = fetch('document.txt')

const btnc = document.getElementById('btnc');
//const list = ul.appendChild(li);

const liste = function () {
    btnc.addEventListener('click', (event) => {
        alert("evenement");

        for (let i = 0; i < array.length; i++) {

            ul.appendChild(li);
            li.innerHTML = li.innerHTML + array[i].innerHTML;
        }
    }
    )
}
function tbli(tab) {
    for (iteam of ul) {
        let list
    }
}*/