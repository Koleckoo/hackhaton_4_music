import { useEffect, useState } from "react";

const Release = ({ release }) => {
  const image = `https://coverartarchive.org/release/${release.id}/front`;
  return (
    <>
      <div>
        <h3>{release.title}</h3>
        <p>{release.date}</p>
        <p>{release.packaging}</p>
        {release["text-representation"].script} -{" "}
        {release["text-representation"].language}
        <img src={image} alt="No image" />
        {/* <p>{media.find((m) => )}</p> */}
      </div>
    </>
  );
};

export default Release;
