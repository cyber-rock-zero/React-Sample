import {Action} from 'redux'
import {Skill} from './skillListReducer';

/**
 * アクションのタイプを定義
 */
export enum ActionNames {
    SCH = 'list/search',
    SUCCESS_SCH = 'list/success_search',
    FAILURE_SCH = 'list/failure_search',
    FETCH_REQUEST_START = 'list/fetch_request_start',
    FETCH_REQUEST_FINISH = 'counter/fetch_request_finish'
}

/**
 * 検索アクション
 */
export interface SearchAction extends Action {
    type: ActionNames.SCH,
    result : Array<Skill>
}

export const searchSkill = (list: Array<Skill>): SearchAction => ({
    type: ActionNames.SCH,
    result: list
})
  
/**
 * 検索成功アクション
 */
export interface SuccessSearchAction extends Action {
    type: ActionNames.SUCCESS_SCH,
    payload: any
}

export const successSearchSkill = (payload: Array<Skill>): SuccessSearchAction => ({
    type: ActionNames.SUCCESS_SCH,
    payload: payload
})

/**
 * 検索失敗アクション
 */
export interface FailureSearchAction extends Action {
    type: ActionNames.FAILURE_SCH,
    error: Error
}

export const failureSearchSkill = (error: Error): FailureSearchAction => ({
    type: ActionNames.FAILURE_SCH,
    error: error
})

/**
 * フェッチ開始アクション
 */
export interface FetchRequestStartAction extends Action {
    type: ActionNames.FETCH_REQUEST_START
}

/**
 * フェッチ開始
 */
export const fetchRequestStart = (): FetchRequestStartAction => ({
    type: ActionNames.FETCH_REQUEST_START
})
  
/**
 * フェッチ終了アクション
 */
export interface FetchRequestFinishAction extends Action {
    type: ActionNames.FETCH_REQUEST_FINISH
}

/**
 * フェッチ開始
 */
export const fetchRequestFinish = (): FetchRequestFinishAction => ({
    type: ActionNames.FETCH_REQUEST_FINISH
})
