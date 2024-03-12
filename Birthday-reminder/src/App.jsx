import List from './list'
import data from './data'
import {useState} from 'react'

export default function App() {
    const [people, setPeople] = useState(data);
    return (
        <main>
            <section className="container">
                <h3>{people.length} birthdays today</h3>
                <List people={people}/>
                <button type="button" className="btn"  onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    )
}
