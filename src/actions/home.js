import {createAction} from 'redux-actions';
import * as types from '../constants/ActionTypes';
import * as topicService from '../services/topicService';


export const closeLoginModal = createAction(types.CLOSE_LOGIN_MODAL, ()=> {
	return {
		show: false
	}
});


export const openLoginModal = createAction(types.OPEN_LOGIN_MODAL, ()=> {
	return {
		show: true
	}
});
