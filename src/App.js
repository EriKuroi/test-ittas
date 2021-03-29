import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import uuid from 'react-uuid';
import data from './mock-data.json';

function App() {
  const [tracked, setTracked] = useState(data);

  return (
    <>
      <Header />
      <main>
        {!!tracked.length &&
          tracked.map(elem => <Card key={uuid()} city={elem} />)
        }
      </main>
    </>
  );
}

export default App;
