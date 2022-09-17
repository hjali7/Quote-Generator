let button = document.querySelector('#new-quote');
let Quote = document.querySelector('.quote');
let  person = document.querySelector('.person');

const Quotes = [{
    quote:`The world reveals itself to those who travel on foot`,
    person:` " Werner herzog" ` 
},{
    quote:`"The most precious possession that ever comes to a man in this world is a woman’s heart."`,
    person:`  Timothy Titcomb, 'J. G. Holland`,
},{
    quote:`"What I say is that, if a man really likes potatoes, he must be a pretty decent sort of fellow."`,
    person:` A.A. Milne, 'Winnie-The-Pooh`,
},{
    quote:`"My speech is going to be like a mini-skirt: long enough to cover the essentials and short enough to hold your attention."`,
    person:` Anonymous `,
},{
    quote:`"It's a funny thing that when a man hasn't anything on earth to worry about, he goes off and gets married."`,
    person:` Robert Frost `,
},{
    quote:`"Marriage is not just spiritual communion. It is also remembering to take out the trash."`,
    person:`  Joyce Brothers. `,
}];

button.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*Quotes.length)
    Quote.innerHTML = Quotes[random].quote;
    person.innerHTML  = Quotes[random].person; 
});

