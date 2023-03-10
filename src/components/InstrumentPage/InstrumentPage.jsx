import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function InstrumentPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchOffset, setSearchOffset] = useState(0);

    const handleSearch = async () => {
        try {
            const response = await fetch(
                `http://musicbrainz.org/ws/2/instrument?query=${searchQuery}&limit=10&offset=${searchOffset}&fmt=json`
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

    const handlePreviousPage = () => {
        if (searchOffset > 0) {
            setSearchOffset(searchOffset - 10);
        }
    };

    const handleNextPage = () => {
        setSearchOffset(searchOffset + 10);
    };

    useEffect(() => {
        searchQuery !== "" && handleSearch();
    }, [searchQuery, searchOffset]);

    return (
        <div className="container mt-4">

            <h1 className="mb-4">Search for your favourite music instrument</h1>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Search" value={searchQuery} onChange={handleChange} />
                <button className="btn btn-primary mt-2" onClick={() => setSearchOffset(0)}>Search</button>
            </div>
            {searchResults.length > 0 ? (
                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={`page-item ${searchOffset === 0 ? "disabled" : ""}`}>
                                <button className="page-link" onClick={handlePreviousPage}>Previous</button>
                            </li>
                            <li className="page-item">
                                <span className="page-link">{searchOffset / 10 + 1}</span>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={handleNextPage}>Next</button>
                            </li>
                        </ul>
                    </nav>
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

                </div>
            ) : (
                <div className="alert alert-warning" role="alert">
                    No results found. Please try again.
                </div>
            )}

        </div>
    );
}

