import moment from 'moment';
import 'moment/locale/es';

const getData = weatherData => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = 'Cloudy';
  const data = {
    humidity,
    temperature: temp,
    weatherState,
    wind: `${speed} m/s`,
  }
  return data;
}

const transformForecast = data =>
  data.list.filter(item => (
    moment.unix(item.dt).hour() === 6 ||
    moment.unix(item.dt).hour() === 12 ||
    moment.unix(item.dt).hour() === 18
  )).map( item => ({
    weekDay: moment.unix(item.dt).format('ddd'),
    hour: moment.unix(item.dt).hour(),
    data: getData(item),
  }));

export default transformForecast;