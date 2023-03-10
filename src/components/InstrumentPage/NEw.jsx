import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function InstrumentPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `http://musicbrainz.org/ws/2/instrument?query=${searchQuery}&limit=10&fmt=json`
            );
            const data = await response.json();
            if (data.hasOwnProperty("instruments")) {
                setSearchResults(data.instruments);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        searchQuery !== "" && handleSearch();
    }, [searchQuery]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Search for your favourite music instrument</h1>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search" value={searchQuery} onChange={handleChange} />
                <button className="btn btn-primary mt-2">Search</button>
            </div>
            {searchResults.length > 0 ? (
                <ul className="list-group">
                    {searchResults.map((result) => (
                        <li key={result.id} className="list-group-item">
                            <Link to={`/instruments/${result.id}`} className="text-decoration-none text-dark">
                                <h2 className="fw-bold">{result.name}</h2>
                                {result.type && <p className="mb-0"><strong>Type:</strong> {result.type}</p>}
                                {result.description && <p className="mb-0"><strong>Description:</strong> {result.description}</p>}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="alert alert-warning" role="alert">
                    No results found. Please try again.
                </div>
            )}

        </div>
    );
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InstrumentDetail() {
    const [instrument, setInstrument] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchInstrument = async () => {
            try {
                const response = await fetch(
                    `http://musicbrainz.org/ws/2/instrument/${id}?&fmt=json`
                );
                const data = await response.json();
                setInstrument(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchInstrument();
    }, [id]);

    return (
        <div className="container mt-4">
            {instrument ? (
                <div>
                    <h2 className="mb-3">{instrument.name}</h2>
                    <p className="lead">Type: {instrument.type}</p>
                    <p className="alert alert-warning">
                        I'm sorry, but no more information seems to be available in this API. Let's go to Wikipedia for more information about your{" "}
                        <a href={`https://en.wikipedia.org/wiki/${instrument.name}`} target='_blank' rel='noreferrer'>{instrument.name}</a>
                    </p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

