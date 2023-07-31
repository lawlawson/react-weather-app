import './CurrentWeather.css';

const currentWeather = ({ data }) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{data.city}</p>
          <p className='weather-description'>{data.weather[0].description}</p>
        </div>
        <img
          className='weather-icon'
          src={`icons/${data.weather[0].icon}.png`}
          alt=''
        />
      </div>
      <div className='bottom'>
        <p className='temperature'>18°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label top'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>22°C</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>2 m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>15%</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentWeather;
