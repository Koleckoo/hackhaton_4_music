import { useEffect, useState } from "react";

const Release = ({ release }) => {
  const image = `https://coverartarchive.org/release/${release.id}/front`;
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col mb-4">
          <div className="card h-100 w-50 p-3">
            <div className="card-body">
              <h3 className="card-title">{release.title}</h3>
              <div className="card-text">
                <p>{release.date}</p>
                <p>{release.packaging}</p>
                <p>
                  {release["text-representation"].script} -{" "}
                  {release["text-representation"].language}
                </p>
              </div>
              <img
                className="card-img-top"
                style={{ width: "300px" }}
                src={image}
                alt="No image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
