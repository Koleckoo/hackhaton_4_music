import { useState, useEffect } from "react";
import NavigationBar from "../Navigation/NavigationBar";

export default function GenrePage() {


  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  const fetchGenres = async () => {
    const response = await fetch('http://musicbrainz.org/ws/2/genre/all?limit=10&fmt=json');
    const data = await response.json();
    console.log(data)
    const genreList = data.genres;
    setGenres(genreList);
  }

  //   const fetchSearch= async () => {
  //     const response = await fetch(`https://musicbrainz.org/ws/2/label?query=${search}&fmt=json`);                             
  //     const data = await response.json();
  //     searchResult(data.labels);
  //     console.log(searchResult);
  //   }


  const inputChange = (event) => {
    const inputValue = event.target.value;
    setGenres(inputValue);
  };

  // const searchChange = (event) => {
  //     const inputValue = event.target.value;
  //     setSearch(inputValue);
  // };

  // const searchMonika = (event) => {
  //     event.preventDefault();
  //     fetchSearch() ;

  // }

  return (
    <>
      <NavigationBar />
      <div className="genre_list">
        <button onClick={fetchGenres}>Show list of genres</button>

        {genres.map((genre) => {
          return < div className="genre_list-tem" key={genre.id}>Genre name: {genre.name}
            <ul>
              <li>id: {genre.id}</li>
            </ul>

          </div>
        })}


      </div>
    </>
  );
};



