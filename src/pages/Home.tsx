import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <WeatherComponent />
      </IonContent>
    </IonPage>
  );
};

export default Home;
