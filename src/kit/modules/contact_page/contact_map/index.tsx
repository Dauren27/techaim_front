import * as React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import styles from './index.module.scss';

const center = {
  lat: 42.87802851184175,
  lng: 74.58100659311197,
};

export default function ContactMap() {
  return (
    <LoadScript googleMapsApiKey='AIzaSyDTUotrPOVgPlgiReJERKICuJik-UFhfFA'>
      <GoogleMap mapContainerClassName={styles.container} center={center} zoom={15}>
        <Marker
          position={center}
          title='Парк Высоких Технологий'
          label='Парк Высоких Технологий'
          visible={false}
        />
      </GoogleMap>
    </LoadScript>
  );
}
