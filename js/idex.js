
    var newQuotes = document.getElementById("Quotes");
var randomQuotes = [' You only live once, but if you do it right, once is enough',
 'Life is really simple, but we insist on making it complicated.',
 ' So many books, so little time.',
 'In three words I can sum up everything Ive learned about life: it goes on.',
 'If you tell the truth, you don,t have to remember anything.',
'A friend is someone who knows all about you and still loves you.',
'To live is the rarest thing in the world. Most people exist, that is all',
'Always forgive your enemies; nothing annoys them so much.'
];

function changeQuotes() {
  var i = Math.floor((Math.random() * randomQuotes.length));
           Quotes.innerText = randomQuotes[i];
}


















