import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Release from "./Release";

export default function ReleasePage() {
  const [releases, setReleases] = useState("");
  const [page, setPage] = useState(0);
  const { id } = useParams();
  const loadReleases = async () => {
    const response = await fetch(
      `https://musicbrainz.org/ws/2/release?artist=${id}&inc=media+release-groups&limit=10&offset=${page}&fmt=json`
    );
    const data = await response.json();
    setReleases(data.releases);
  };

  useEffect(() => {
    loadReleases();
  }, [page]);

  return (
    <div className="container">
      <div className="row">
        {page > 0 ? (
          <button onClick={() => setPage(page - 10)}>Previos page</button>
        ) : (
          ""
        )}
        <button onClick={() => setPage(page + 10)}>Next page</button>
      </div>
      {releases == "" ? (
        <div>Loading...</div>
      ) : (
        releases.map((release) => (
          <Release key={release.id} release={release} />
        ))
      )}
    </div>
  );
}
