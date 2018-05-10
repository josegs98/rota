import workers from './AddWorkerReducer';
import calendar from './CalendarReducer';
import settings from './SettingsReducer';
import {combineReducers} from 'redux';

export default combineReducers({
    workers,
    settings,
    calendar
})