import {SAVE_PROFILE} from '../actions/types';
import { AccessibilityInfo } from 'react-native';

const initState={
    profile:{
        username:null,
        password:null,
        name:null,
        email:null
    }
}


const profileReducer=(state=initState,action)=>{
    switch(action.type){
        case SAVE_PROFILE:
          return{...state,profile:action.profile}
        default:
          return state;
      }
}

export default profileReducer