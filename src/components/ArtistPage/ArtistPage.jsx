import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";

export default function ArtistPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    setSearchQuery(inputRef.current.value);
  };

  const fetchArtists = async () => {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist?query=${searchQuery}&limit=15&offset=0&fmt=json`
    );
    const data = await response.json();
    setSearchResults(data.artists);
  };

  useEffect(() => {
    fetchArtists();
  }, [searchQuery]);

  useEffect(() => {
    searchQuery === "" ? "" : fetchArtists();
  }, [searchQuery]);

  return (
    <>
      <NavigationBar />
      <div class="container artist-page">
        <div class="row artist-page__search mb-3">
          <h1 className="mb-4">Search for your favourite artist</h1>
          <div class="col-8">
            <input class="form-control" ref={inputRef} type="text" name="artist-search" placeholder="Search" />
          </div>
          <div class="col-4">
            <button class="btn btn-primary" onClick={handleClick}>Search</button>
          </div>
        </div>
        <div class="artist-page__results mt-4">
          {searchResults == null ? (
            <div class="alert alert-warning" role="alert">
              No results found. Please try again.
            </div>
          ) : (
            <div class="results">
              <h1>I am Searching for {searchQuery}</h1>
              {searchResults.map((artist, i) => {
                return (
                  <div key={i} class="results__artist card mb-3">
                    <div class="card-body">
                      <Link to={"/Artists/" + artist.id} class="card-title text-decoration-none">{artist.name}</Link>
                      <p class="card-text country">{artist.country}</p>
                      <p class="card-text life-span">
                        {artist["life-span"].begin}
                        {artist["life-span"].ended == true ? " - " + artist["life-span"].end : ""}
                      </p>
                      <ul class="card-text">
                        {artist.aliases == null
                          ? ""
                          : artist.aliases.map((alias, i) => {
                            return <li key={i}>{alias.name}</li>;
                          })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

    </>
  );
}
