import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../Navigation/NavigationBar";

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
        <>
            <NavigationBar />
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
        </>
    );
}

