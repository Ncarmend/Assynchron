const body = document.querySelector("body")
const becode = document.querySelector("becode")
const ul = document.createElement("ul")
body.appendChild(ul)
console.log(ul)
becode.addEventListener("click", () => {
  fetch("becode.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(list => {
        const li = document.createElement("li")
        ul.appendChild(li)
        li.textContent = list
        console.log(list)
      })
    })
})