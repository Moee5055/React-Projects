import Tour from "./Tour";

export default function Tuors({ tours }) {
  return (
    <section>
      <div>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour}></Tour>;
        })}
      </div>
    </section>
  );
}
