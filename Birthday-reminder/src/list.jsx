import './index.css'

export default function List({people}) {
    return (
        <>
            {
                people.map((person) => {
                    const {id, name, age, image} = person;
                    return (
                         <article className="list" key={id}>
                            <figure>
                                <img src={image} alt={name} />
                            </figure>
                            <div className="info">
                                <h3>{name}</h3>
                                <p style={{fontSize: "0.7rem"}}>{age} years</p>
                            </div>
                         </article>
                    );
                })
            }
        </>
    )
}