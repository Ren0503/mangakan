import axios from 'axios'
import { errorHandler } from 'error'

import { AppThunk } from 'store'
import {
    MangaListActionTypes,
    MangaDetailActionTypes,
    MangaList,
    MangaDetail,
    MangaCreateCommentActionTypes,
    MangaTopActionTypes
} from 'types/manga'

export const listMangas = (
	keyword: string = '',
	pageNumber: string = ''
): AppThunk => async (dispatch) => {
	try {
		dispatch({ type: MangaListActionTypes.MANGA_LIST_REQUEST })

		const { data } = await axios.get<{
			mangas: MangaList[]
			page: number
			pages: number
		}>(`/api/manga?keyword=${keyword}&page=${pageNumber}`)
		
		dispatch({
			type: MangaListActionTypes.MANGA_LIST_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: MangaListActionTypes.MANGA_LIST_FAILURE,
			payload: errorHandler(error)
		})
	}
}

export const detailManga = (id: string): AppThunk => async (
	dispatch
) => {
	try {
		dispatch({ type: MangaDetailActionTypes.MANGA_DETAIL_REQUEST })
		
		const { data } = await axios.get<MangaDetail>(`/api/manga/${id}`)

		dispatch({
			type: MangaDetailActionTypes.MANGA_DETAIL_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: MangaDetailActionTypes.MANGA_DETAIL_FAILURE,
			payload: errorHandler(error)
		})
	}
}

export const createMangaComment = (
    mangaId: string,
    comment: { body: string }
): AppThunk => async (dispatch, getState) => {
    try {
        dispatch({
            type: MangaCreateCommentActionTypes.MANGA_CREATE_COMMENT_REQUEST
        })

        const { userInfo } = getState().userLogin

		const config = {
			headers: {
				'Content-Type': 'Application/json',
				Authorization: `Bearer ${userInfo?.token}`
			}
		}

        await axios.post(`api/manga/${mangaId}/comments/`, comment, config)

        dispatch({
            type: MangaCreateCommentActionTypes.MANGA_CREATE_COMMENT_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: MangaCreateCommentActionTypes.MANGA_CREATE_COMMENT_FAILURE,
            payload: errorHandler(error)
        })
    }
}


export const listTopMangas = (): AppThunk => async (dispatch) => {
	try {
		dispatch({ type: MangaTopActionTypes.MANGA_TOP_REQUEST })

		const { data } = await axios.get<MangaList[]>(`/api/manga/top/`)

		dispatch({
			type: MangaTopActionTypes.MANGA_TOP_SUCCESS,
			payload: data
		})
	} catch (error) {
		dispatch({
			type: MangaTopActionTypes.MANGA_TOP_FAILURE,
			payload: errorHandler(error)
		})
	}
}
