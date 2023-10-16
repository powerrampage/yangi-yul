import "leaflet/dist/leaflet.css";

import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const MapsPage = () => {
	return (
		<MapContainer center={[41.295692, 65.218247]} zoom={7} scrollWheelZoom={true} className='!h-full'>
			<TileLayer minZoom={3} url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
		</MapContainer>
	);
};

export default MapsPage;
