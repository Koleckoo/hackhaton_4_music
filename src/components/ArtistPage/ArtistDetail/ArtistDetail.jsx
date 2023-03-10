import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArtistDetail() {
  const [artistData, setArtistData] = useState([]);
  const { id } = useParams();

  const fetchArtist = async () => {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/artist/${id}?inc=aliases+releases&fmt=json`
    );
    const data = await response.json();
    console.log(data);
    setArtistData(data);
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <div class="container">
      <h1>Name: {artistData.name}</h1>
      <h4>Country: {artistData.country}</h4>
      <h4>Gender: {artistData.gender}</h4>
      <h4>Type: {artistData.type}</h4>
      <Link class="btn btn-primary" to={`/Artists/${artistData.id}/releases`}>Releases</Link>
    </div>
  );
}
