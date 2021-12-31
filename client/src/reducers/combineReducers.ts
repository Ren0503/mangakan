import { combineReducers } from 'redux'

import {
	userLoginReducer,
	userRegisterReducer,
	userDetailReducer,
	userUpdateProfileReducer,
} from './userReducers'

import {
    mangaListReducer,
    mangaDetailReducer,
    mangaTopReducer,
    mangaCreateCommentReducer,
} from './mangaReducers'

import {
    chapterDetailReducer
} from './chapterReducers'

import {
    favoriteAddReducer,
    favoriteUserReducer,
} from './favoriteReducers'


import { ReduxState } from 'types/ReduxState';

const reducer = combineReducers<ReduxState>({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetail: userDetailReducer,
	userUpdateProfile: userUpdateProfileReducer,
    mangaList: mangaListReducer,
    mangaDetail: mangaDetailReducer,
    mangaTop: mangaTopReducer,
    mangaCreateComment: mangaCreateCommentReducer,
    chapterDetail: chapterDetailReducer,
    favoriteAdd: favoriteAddReducer,
    favoriteUser: favoriteUserReducer,
});

export default reducer;