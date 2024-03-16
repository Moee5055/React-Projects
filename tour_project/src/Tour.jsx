import { useState, useContext } from "react";
import { RemoveTour } from "./App";

export default function Tour({ image, id, info, price, name }) {
  const [readmore, setReadMore] = useState(false);
  const removeTour = useContext(RemoveTour);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>git
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <span
            onClick={() => {
              setReadMore(!readmore);
            }}>
            {readmore ? "Show less" : "Read more"}
          </span>
        </p>
        <button
          onClick={() => {
            removeTour(id);
          }}>
          not intrested
        </button>
      </footer>
    </article>
  );
}
