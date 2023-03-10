import { useEffect, useState } from "react";

const Release = ({ title, date, packaging, media, id }) => {
  const image = `https://coverartarchive.org/release/${id}/front`;
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{packaging}</p>

      <img src={image} alt="No image" />

      {/* <p>{media.find((m) => )}</p> */}
    </div>
  );
};

export default Release;
