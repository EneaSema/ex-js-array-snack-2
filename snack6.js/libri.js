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
  book.price = (parseFloat(book.price) - discount).toFixed(2);
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

// Snack 3 - Calcola l’età media
// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = [];
console.log(
  "Inizializazione dell' array con tutte le età degli autori dei libri:",
  ages
);

const etaautoriLibri = books.map((book) => {
  ages.push(book.author.age);
  return ages;
});

console.log(" Array con tutte le età degli autori dei libri:", ages);

const agesSum = ages.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log("La somma di tutte le età degli autori è:", agesSum);

const ageMiddleAuthors = agesSum / ages.length;

console.log("L'età media degli autori dei libri è:", ageMiddleAuthors);

// Snack 5 (Bonus) - Raccogli i libri
// Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare l'url base:
// http://localhost:3333
// al posto di:
// https://freetestapi.com/api/v1
// Ad esempio:
// http://localhost:3333/users
// per chiamare l'endpoint /users
// Clicca qui per la guida su come installare il Server API Locale!

// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id} usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks) che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

// const ids = [2, 13, 7, 21, 19];
// const booksList = [];

// async function getBooks(ids) {
//   console.log("Sto caricando la funzione getBooks coni seguenti ids:", ids);
//   const promises = ids.map((id) => {
//     fetch(`http://localhost:3333/freetestapi/books/${id}`).then((resp) =>
//       console.log(resp)
//     );
//     return promises;
//   });
//   resultsList = await Promise.all(promises);
//   booksList.push(resultsList);

//   console.log(`La mia book list è:`, booksList);
//   return booksList;
// }

// (async () => {
//   const solution = await getBooks(ids);
//   console.log("La soluzione è:", solution);
// })();

//NON RIESCO A RISOLVERLO

//Snack 6 (Bonus) - Ordina i libri
// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
// Ordina l’array booksByPricein base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

const areThereAvailableBooks = "true";

const booksByPrice = books.sort((a, b) => {
  return parseFloat(a.price) - parseFloat(b.price);
});
console.log(
  "Gli elemnti di books ordinati in maniera crescente sono:",
  booksByPrice
);

const booksByPricein = booksByPrice.filter((book) => {
  if (book.available === `true`) {
    console.log("il libro è disponibile:", book);
  } else {
    console.log("il libro non è disponibile:", book);
  }
  return book;
});
console.log("Libri ordinati in base anche alla disponibilità:", booksByPricein);
