/* typescript-eslint-disable no-implicit-any */
/* typescript-eslint: disable no-implicit-any */
/* typescript-eslint: disable noImplicitAny */
/* typescript-eslint-disable @typescript-eslint/no-implicit-any */
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonRow, IonSearchbar, IonToggle } from '@ionic/react';
import WeatherApi from '../providers/WeatherApi';
import React, { useEffect, useState, Component } from 'react';
import images from '../images/images';
import './WeatherComponent.css';
import moment from 'moment';

interface State {
  searchText: string,
  weatherList: [],
  currentDayPhrase: string,
  currentTemp: number,
  city: string,
  currentDate: any
 }

class WeatherComponent extends Component<{}, State> {
  frameDuration = 1000 / 60;
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      weatherList: [],
      currentDayPhrase: '',
      currentTemp: 0,
      city: '',
      currentDate: ''
    }
  }

  componentDidMount(){
    this.getWeather('dallas');
  }

  getWeather = async (city: string) => {
    const weatherList = await WeatherApi.getWeatherForcast(city);
    const currentDayPhrase = weatherList[0].Day.IconPhrase;
    const currentTemp = weatherList[0].Temperature.Maximum.Value;
    const setCity = city.charAt(0).toUpperCase() + city.slice(1);
    const setCurrentDate = weatherList[0].Date;
    this.setState({
      weatherList,
      currentDayPhrase,
      currentTemp: currentTemp,
      city: setCity,
      currentDate: setCurrentDate
    });
  }
  easeOutQuad = (t: number) => t * ( 2 - t );
  CountUpAnimation = ( { duration = 2000 } ) => {
    const [ count, setCount ] = useState( 0 );
  
    useEffect( () => {
      let frame = 0;
      const totalFrames = Math.round( duration / this.frameDuration );
      const counter = setInterval( () => {
        frame++;
        const progress = this.easeOutQuad( frame / totalFrames );
        setCount( this.state.currentTemp * progress );
  
        if ( frame === totalFrames ) {
          clearInterval( counter );
        }
      }, this.frameDuration );
    }, [] );
  
    return <span>{ Math.floor( count )}</span>
  };
  
  searchLocations = (city: string) => {
    this.setState({
      ...this.state,
      searchText: city
    })
  };
  
  search = async () => {
    this.getWeather(this.state.searchText);
  }

  render() {
    return (
      <IonContent>
        <IonGrid ion-no-padding className="ion-grid-container">
        <div className="cloud1">
          <div className="cloud"></div>
        </div>
        <div className="cloud2">
            <div className="cloudTwo"></div>
        </div>
        <div className="cloud3">
            <div className="cloud"></div>
        </div>
        <div className="cloud4">
            <div className="cloud"></div>
        </div>
        <div className="cloud5">
            <div className="cloud"></div>
        </div>
        <div className="search-bar">
          <IonSearchbar color="light" value={this.state.searchText} onIonChange={e => this.searchLocations(e.detail.value!)} showCancelButton="focus"></IonSearchbar><IonButton color="light" onClick={this.search}>Search</IonButton>
        </div>
        <div className="date-location ion-text-center">
          <IonRow className="location-row">
            <div><IonImg src={images.locationOn} className="image-row-icon"/></div>
            <div className="city-state">{this.state.city}</div>
          </IonRow>
          <span>{moment(this.state.currentDate).format('dddd, MMMM Do YYYY')}</span>
        </div>
          <IonRow className="main-row-container">
            <IonCol className="box-shadow">
              <IonRow className="background-image-container">
                    <div className="primary ion-text-center image-degree-text">
                      {/* <this.CountUpAnimation></this.CountUpAnimation>&#176; */}
                      {this.state.currentTemp}
                    </div>
                    <div className="primary ion-text-center">
                      <IonImg src={images.cloudSun} className="image-row-icon"/>
                    </div>
                    <div className="primary image-description-text">
                      <span>{this.state.currentDayPhrase}</span>
                    </div>
                    <div className="toggle-wrapper">
                      <IonToggle className="toggle"/>
                    </div>
              </IonRow>
              <IonRow className="weather-panel-text weather-panel-background">
                {
                this.state.weatherList.map((weatherItem: any) => (
                    <IonCol className="right-border" key={weatherItem.Date}>
                      <div className="ion-text-center weather-panel-day-text">
                        {moment(weatherItem.Date).format('ddd')}
                      </div>
                      <div className="ion-text-center weather-panel-day-text">
                      {(() => {
                        switch (weatherItem.Day.Icon) {
                          case 13 || 14 || 16 || 17:        return <IonImg src={images.cloudDrizzleSun} className="drizzle"/>
                          case 12 || 18 || 25 || 29:        return <IonImg src={images.cloudDrizzleAlt} className="rain"/>
                          case 15:                          return <IonImg src={images.cloudLightning} className="lightning"/>
                          default:                          return <IonImg src={images.cloudSun} className="cloud-sun"/>
                        }
                      })()}
                      </div>
                      <div className="ion-text-center weather-panel-degree-text">
                        {weatherItem.Temperature.Maximum.Value}&#176;
                      </div>
                    </IonCol>
                    )
                  )
                }
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  }
};

export default WeatherComponent;