import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import uuid from 'react-uuid';

function App() {
  const [tracked, setTracked] = useState([]);
  const getChosenCity = async (id) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=64e98969cdc8ec3dd3bf5d5a19a4b3b5&lang=ru`);
      if (!response.ok) {
        throw Error(response.statusText);
      }else return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCityChoice = async (e) => {
    const data = await getChosenCity(e.value)
    const newTracked = tracked.map(city => city);
    const cityIndex = newTracked.findIndex(city => city.id === e.value);
    const time = Date.now();
    data.refreshTime = time;
    if(cityIndex !== -1){
      newTracked[cityIndex] = data;
    }else{
      newTracked.push(data);
    }
    setTracked(newTracked);
  }
  return (
    <>
      <Header handleCityChoice={handleCityChoice} />
      <main>
        {!!tracked.length &&
          tracked.map(elem => <Card key={uuid()} city={elem} />)
        }
      </main>
    </>
  );
}

export default App;
