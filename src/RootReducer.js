import {combineReducers} from 'redux';
import TrainsDuck from './trains/ducks/TrainsDuck';
import BusesDuck from './buses/ducks/BusesDuck';
import FlightsDuck from './flights/ducks/FlightsDuck';

export default combineReducers({
	trains: TrainsDuck,
	buses: BusesDuck,
	flights: FlightsDuck
});