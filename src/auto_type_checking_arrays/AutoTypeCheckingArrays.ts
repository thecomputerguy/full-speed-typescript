interface Movie {
  title: string;
  lengthInMinutes: number;
}

var movies: Movie[] = [];

movies.push({
  title: "American History",
  lengthInMinutes: 119,
  //production: "USA", //Example of structural typing
});

movies.push({
  title: "Sherlock Holmes",
  lengthInMinutes: 128,
});

movies.push({
  title: "Captain America",
  lengthInMinutes: 128,
});

function compareMovieLengths(x: Movie, y: Movie): number {
  if (x.lengthInMinutes > y.lengthInMinutes) {
    return -1;
  }
  if (x.lengthInMinutes < y.lengthInMinutes) {
    return 1;
  }

  return 0;
}

var moviesOrderedLength = movies.sort(compareMovieLengths);

var longestMovie = moviesOrderedLength[0];

console.log("Longest movie is : ", longestMovie.title);
