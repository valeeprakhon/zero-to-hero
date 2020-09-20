import {SAVE_PROFILE} from './types'

export const saveProfile=(profile)=>(
    {
        type:SAVE_PROFILE,
        profile:profile
    }
);