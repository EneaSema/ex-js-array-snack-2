const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

//Snack 1 - Filtra e Modifica
// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

function somma(a, b) {
  return a + b;
}

console.log(somma(1, 3));

const longBooks = [];
console.log("LongBooks iniziale:", longBooks);

const libriConOltre300Pagine = books.filter((book) => {
  if (book.pages >= 300) {
    longBooks.push(book);
  }
  console.log(
    "Risultato dopo la condizione di verifica delle 300 e più pagine:",
    longBooks
  );
  return longBooks;
});

console.log(
  "Il risultato finale dei libri che hanno più di 300 pagine è: ",
  longBooks
);
// La mia soluzione non mi convince

const longBooksTitles = [];
console.log(
  "Creazione array della lista dei titoli dei libri contenuti in longBooks:",
  longBooksTitles
);

const titoliLibriLunghi = longBooks.map((book) => {
  longBooksTitles.push(book.title);
  return longBooksTitles;
});

console.log(
  "Array finale contenente solo la lista dei titoli dei libri contenuti in lonkBooks:",
  longBooksTitles
);

// Snack 2 - Il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = [];
console.log(
  "Iniazializzazione array di tutti i libri disponibili:",
  availableBooks
);

const tuttiLibriDisponibili = books.filter((book) => {
  if (book.available === true) {
    availableBooks.push(book);
    return availableBooks;
  }
});
console.log(
  "Risultato finale dell'array contenente tutti i libri disponibili è",
  availableBooks
);

const discountedBooks = [];
console.log("Inizializzaione array libri scontati", discountedBooks);

const libriDisponibiliScontati20XCento = availableBooks.map((book) => {
  console.log(
    "Inizializzazione variabile del prezzo con il prezzo originale del libro",
    book.price
  );
  const discount = (parseInt(book.price) * 20) / 100;
  console.log("Prezzo scontato:", discount);
  book.price = (parseInt(book.price) - discount).toFixed(2);
  console.log("Prezzo scontato finale del libro:", book.price);
  discountedBooks.push(book);
  return discountedBooks;
});

console.log("I libri scontati sono:", libriDisponibiliScontati20XCento);

const fullPricedBook = discountedBooks.find((book) => {
  if (parseFloat(book.price) % 1 === 0) {
    return book;
  }
});

console.log(fullPricedBook);
