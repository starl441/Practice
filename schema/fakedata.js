const UserList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "USA",
    favoriteMovies: [
      { name: "Avengers Endgame", director: "Anthony Russo" },
      { name: "Interstellar", director: "Christopher Nolan" }
    ]
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "USA",
    favoriteMovies: [
      { name: "Superbad", director: "Greg Mottola" }
    ]
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "UK",
    favoriteMovies: [
      { name: "Interstellar", director: "Christopher Nolan" }
    ]
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafe123",
    age: 60,
    nationality: "CHINA",
    favoriteMovies: []
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly2019",
    age: 5,
    nationality: "MEXICO",
    favoriteMovies: [
      { name: "Avengers Endgame", director: "Anthony Russo" }
    ]
  }
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
    director: "Anthony Russo"
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
    director: "Christopher Nolan"
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
    director: "Greg Mottola"
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublication: 2035,
    isInTheaters: false,
    director: "Pedro"
  }
];

module.exports = { UserList, MovieList };
