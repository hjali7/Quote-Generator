let button = document.querySelector('#new-quote')
let quote = document.querySelector(".quote")
let person = document.querySelector(".person")
let url = `https://type.fit/api/quotes`

button.addEventListener('click' , function () {
    let ourReq = new XMLHttpRequest()
ourReq.open("GET",url)

ourReq.onload = () =>{
    if(ourReq.readyState === 4) {
        if(ourReq.status === 200) {
            let ourQuote = JSON.parse(ourReq.responseText)
            funQuote(ourQuote)
        }
    }
}
ourReq.send()
})

function funQuote (value) {
    let ran = Math.floor(Math.random()*value.length)
    quote.innerHTML = value[ran].text
    person.innerHTML = value[ran].author
}