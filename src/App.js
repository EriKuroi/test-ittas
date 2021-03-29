import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import uuid from 'react-uuid';
import data from './mock-data.json';

function App() {
  const [tracked, setTracked] = useState(data);

  const testTast = async () => {
    try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=2172797&APPID={64e98969cdc8ec3dd3bf5d5a19a4b3b5}');
      if (!response.ok) {
        throw Error(response.statusText);
      }else console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  testTast()
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
