import { useEffect, useState } from "react";

const Release = ({ release }) => {
  const image = `https://coverartarchive.org/release/${release.id}/front`;
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center">
      <div className="col mb-4">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={image}
            alt="No image"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h3 className="card-title text-center">{release.title}</h3>
            <div className="card-text text-center">
              <p>{release.date}</p>
              <p>{release.packaging}</p>
              <p>
                {release["text-representation"].script} -{" "}
                {release["text-representation"].language}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
