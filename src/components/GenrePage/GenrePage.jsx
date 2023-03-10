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
      <div className="container mt-4">
                <h1 className="mb-4">Show list of genres</h1>
        <button className="btn btn-primary mt-2" onClick={fetchGenres}>Show</button>

        {genres.map((genre) => {
          return < div className="mb-3 justify-content-center" key={genre.id}><h4>Genre name: {genre.name}</h4>
            <ul>
              <li className="">id: {genre.id}</li>
            </ul>

          </div>
        })}


      </div>
    </>
  );
};



