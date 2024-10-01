const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}
function getBook(id) {
  return data.find((d) => d.id === id);
}
const book = getBook(3);
book;

const { title, author, genres, hasMovieAdaptation, pages, publicationDate } =
  book;
//there is an error here
// title = book.title;
// author = book.author;

title;
author;
const [firstGenre, secondGenre] = genres;
firstGenre;
secondGenre;

const newGenre = [...genres, "horror"];
newGenre;
const newBook = { ...book, moviePublicationDate: "2024-01-01" };
newBook;

// function getYear(publicationDate) {
//   return publicationDate.split("-")[0];
// }
const getYear = (publicationDate) => publicationDate.split("-")[0];
const summary = `${title}, is the name of book. It has  ${pages} no of pages. It was published on ${getYear}`;

summary;

const pageRange =
  pages > 1000 ? "it has more than 1000 pages" : "it has less than 1000 pages";

pageRange;

console.log(true && "hello");
console.log(false && "hello");
console.log(true || "hello");
console.log(false || "hello");
console.log("" || "No data present");

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount;
  console.log(librarything);
  return goodreads + librarything;
}

console.log(`Review count is ${getTotalReviewCount(book)}`);

const books = getBooks();

const bookAuthor = books.map((book) => book.author);
console.log(bookAuthor);

const bookAuthorWithTitle = books.map((book) => {
  return { author: book.author, title: book.title };
});

bookAuthorWithTitle;

// const bookWithMoreThanThousandPage=books.filter((book)=>{
//   return({pages:book.pages>1000});
// })

const bookWithMoreThanThousandPage = books.filter((book) => book.pages > 1000);

bookWithMoreThanThousandPage;

const totalPageCount = books.reduce((sum, book) => sum + book.pages, 0);
totalPageCount;
books;

const arr = [4, 6, 23, 5, 7, 1, 8, 5];
const sortedArr = arr.sort((a, b) => a - b);
sortedArr;
arr;

const arr1 = [2, 4, 6, 7, 2, 9, 4, 3];
const sortedArr1 = arr1.slice().sort((a, b) => a - b);
arr1;
sortedArr1;

//add newv book object in existing array
const newBookk = {
  id: 6,
  title: "harry puttar",
  author: " me",
};
const newBooks = [...books, newBookk];
console.log(newBooks);

//2 delete book
const bookAfterDeletion = newBooks.filter((book) => book.id !== 1);

console.log(bookAfterDeletion);
console.log(newBooks);
//3 update book
const bookAfterUpdate = newBooks.map((book) =>
  book.id === 1 ? { ...book, pages: 123 } : book
);
console.log(bookAfterUpdate);

const response = fetch("https://jsonplaceholder.typicode.com/todos");
console.log(response);

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

console.log("i am here");

async function getToDo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}
getToDo();
console.log("i am heree");
