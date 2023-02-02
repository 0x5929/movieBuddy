const getAllResp = [
  {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  },
  {
    "Title": "Superman",
    "Year": "1978",
    "imdbID": "tt0078346",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  },
  {
    "Title": "Superman II",
    "Year": "1980",
    "imdbID": "tt0081573",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
  },
  {
    "Title": "Superman III",
    "Year": "1983",
    "imdbID": "tt0086393",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
  },
  {
    "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
  },
  {
    "Title": "Superman IV: The Quest for Peace",
    "Year": "1987",
    "imdbID": "tt0094074",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
  },
  {
    "Title": "Superman & Lois",
    "Year": "2021–",
    "imdbID": "tt11192306",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGYyMmViMjgtZjViZi00NjkzLThjZGItMzZhYmZmOWZlMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Superman/Batman: Apocalypse",
    "Year": "2010",
    "imdbID": "tt1673430",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    "Title": "Lois & Clark: The New Adventures of Superman",
    "Year": "1993–1997",
    "imdbID": "tt0106057",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
  }
]


const getResp = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "Rated": "PG-13",
  "Released": "25 Mar 2016",
  "Runtime": "151 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Zack Snyder",
  "Writer": "Chris Terrio, David S. Goyer, Bob Kane",
  "Actors": "Ben Affleck, Henry Cavill, Amy Adams",
  "Plot": "The general public is concerned over having Superman on their planet and letting the \"Dark Knight\" - Batman - pursue the streets of Gotham. While this is happening, a power-phobic Batman tries to attack Superman. Meanwhile, Superman tries to settle on a decision, and Lex Luthor, the criminal mastermind and millionaire, tries to use his own advantages to fight the \"Man of Steel\".",
  "Language": "English",
  "Country": "United States",
  "Awards": "14 wins & 31 nominations",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "6.4/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "29%"
    },
    {
      "Source": "Metacritic",
      "Value": "44/100"
    }
  ],
  "Metascore": "44",
  "imdbRating": "6.4",
  "imdbVotes": "704,091",
  "imdbID": "tt2975590",
  "Type": "movie",
  "DVD": "19 Jul 2016",
  "BoxOffice": "$330,360,194",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}

export { getResp, getAllResp }