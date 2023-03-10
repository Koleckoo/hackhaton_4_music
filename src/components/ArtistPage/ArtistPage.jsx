import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="artist-page">
      <div className="artist-page__search">
        <input ref={inputRef} type="text" name="artist-search" />
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="artist-page__results">
        <h1>I am Searching for {searchQuery}</h1>
        <div className="results">
          {searchResults == null
            ? ""
            : searchResults.map((artist, i) => {
                return (
                  <div key={i} className="results__artist">
                    <Link to={"/Artists/" + artist.id}>{artist.name}</Link>
                    <p className="country">{artist.country}</p>
                    <p className="life-span">
                      {artist["life-span"].begin}
                      {artist["life-span"].ended == true
                        ? " - " + artist["life-span"].end
                        : ""}
                    </p>
                    <ul>
                      {artist.aliases == null
                        ? ""
                        : artist.aliases.map((alias, i) => {
                            return <li key={i}>{alias.name}</li>;
                          })}
                    </ul>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
