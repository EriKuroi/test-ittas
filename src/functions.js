export async function getChosenCity(id) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=64e98969cdc8ec3dd3bf5d5a19a4b3b5&lang=ru`);
        if (!response.ok) {
            throw Error(response.statusText);
        } else
            return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const saveToLocalStorage = (stateArray) => {
    const localStorageString = JSON.stringify(stateArray);
    localStorage.setItem('localStorageString', localStorageString);
}
export function createCityObject(data) {
    const result = {};
    const time = Date.now();
    result.id = data.id;
    result.name = data.name;
    result.temp = data.main.temp;
    result.alt = data.weather[0].main;
    result.tooltip = data.weather[0].description;
    result.icon = data.weather[0].icon;
    result.humidity = data.main.humidity;
    result.pressure = data.main.pressure;
    result.windSpeed = data.wind.speed;
    result.windDeg = data.wind.deg;
    result.refreshTime = time;
    return result;
}
