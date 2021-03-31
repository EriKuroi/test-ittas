import './App.scss';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import uuid from 'react-uuid';
import { getChosenCity, saveToLocalStorage, createCityObject } from './functions';

function App() {
  const [tracked, setTracked] = useState([]);
  useEffect(() => {
    const localStorageItem = localStorage.getItem('localStorageString');
    if (localStorageItem) {
      const localStorageParsed = JSON.parse(localStorageItem);
      setTracked(localStorageParsed);
    }
  }, [])

  const handleCityChoice = async (chosen) => {
    const data = await getChosenCity(chosen.value)
    const newTracked = tracked.map(city => city);
    const cityIndex = newTracked.findIndex(city => -city.id === -chosen.value);
    data.name = chosen.label;
    const cityInfo = createCityObject(data);
    if (cityIndex !== -1) {
      newTracked[cityIndex] = cityInfo;
    } else {
      newTracked.push(cityInfo);
    }
    setTracked(newTracked);
    saveToLocalStorage(newTracked);
  }
  const deleteCard = (id) => {
    const index = tracked.findIndex(city => city.id === id)
    const newTracked = tracked.map(city => city);
    newTracked.splice(index, 1);
    setTracked(newTracked);
    saveToLocalStorage(newTracked);
  }
  const handleCardButtons = (type, id, name) => {
    if (type === 'ref') {
      handleCityChoice({ 'value': id, 'label': name })
    };
    if (type === 'del') {
      deleteCard(id);
    }
  };
  
  return (
    <>
      <Header handleCityChoice={handleCityChoice} />
      <main>
        {!!tracked.length &&
          tracked.map(elem => <Card
            key={uuid()}
            city={elem}
            handleCardButtons={handleCardButtons}
          />)
        }
      </main>
    </>
  );
}

export default App;
