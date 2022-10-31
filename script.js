const body = document.body;
const bouton = document.createElement("button");
body.appendChild(bouton)
bouton.innerText = ("Click to selected ")
const text = document.createElement("input")
const div = document.createElement("div")
body.appendChild(div)
div.appendChild(text)
text.type = "text"
text.classList.add("nameInput")
const theInput = document.querySelector(".nameInput");
const select = document.createElement("select")
body.appendChild(select)
const option = document.createElement("option")
const option0 = document.createElement("option")
const option1 = document.createElement("option")
const option2 = document.createElement("option")
const option3 = document.createElement("option")
const option4 = document.createElement("option")
const option5 = document.createElement("option")
const option6 = document.createElement("option")
const option7 = document.createElement("option")
const option8 = document.createElement("option")
// pays
option0.value = "US"
option0.text = "Etats-Unis"
option1.value = "BE"
option1.text = "Belgique"
option2.value = "CG"
option2.text = "République du Congo"
option3.value = "DE"
option3.text = "Allemagne"
option4.value = "CE"
option4.text = "Italie"
option5.value = "ES"
option5.text = "Espagne"
option6.value = "DE"
option6.text = "Allemagne"
option7.value = "Go"
option7.text = "Royaume-Uni"
option8.value = "FR"
option8.text = "France"

select.appendChild(option)
select.appendChild(option0)
select.appendChild(option1)
select.appendChild(option2)
select.appendChild(option4)
select.appendChild(option5)
select.appendChild(option6)
select.appendChild(option7)

bouton.addEventListener('click', () => {
    const name = theInput.value
    const country = select.value
    const lastSearched = localStorage.getItem(`research_${name}_${country}`)
    const myfetch = (name, country) =>
        fetch('https://api.agify.io/?name=' + name + '&country_id=' + country)

    if (lastSearched != null) {
        let json = JSON.parse(lastSearched)
        console.log(json)
        div(name, json)
    } else {
        console.log('fetched from API')

        myfetch(name, country)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                const div = document.createElement('div')
                body.appendChild(div)
                const jsontostring = JSON.stringify(json)
                div.textContent = (jsontostring)
                localStorage.setItem(`research_${name}_${country}`, json.stringify(json))
            })
            .catch(error => {
                console.log('ERROR!', error)
            })
    }
})