import { useState } from 'react';
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3><b>{people.length} B'days Today</b></h3>
        <section>
          <List data={people} />
        </section>
        <button className='btn btn-block' onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App

