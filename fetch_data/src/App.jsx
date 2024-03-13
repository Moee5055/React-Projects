import React from "react";
import List from './list'

export default function App() {
    return (
        <main>
            <section className="container">
                <h1>Github Users</h1>
                <div className="users">
                    <ul>
                        <List />
                    </ul>
                </div>
            </section>
        </main>
    );
}