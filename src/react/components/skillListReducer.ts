
import { ActionNames, SearchAction, SuccessSearchAction, FailureSearchAction } from './skillListActionCreator';
import { FetchRequestStartAction, FetchRequestFinishAction } from './skillListActionCreator';

/**
 * Skillの定義
 */
export interface Skill {
    key: number,
    name: string,
    type: number
}

/**
 * SkillListのState
 */
export interface SkillListState {

    /**
     * 名前
     */
    name: string,
    
    /**
     * カウント
     */
    count: number,

    /**
     * スキル
     */
    skills: Array<Skill>
}

/**
 * アクションの定義
 */
export type SkillListActions = SearchAction 
                          | SuccessSearchAction 
                          | FailureSearchAction 
                          | FetchRequestStartAction 
                          | FetchRequestFinishAction;

/**
 * デフォルトstateの定義
 */
const initialState:SkillListState = {
    name: 'init',
    count: 0, 
    skills: []
};

/**
 * stateとacutionから新しいstateを返却します
 */
export default function reducer(state: SkillListState = initialState, action: SkillListActions): SkillListState {
    switch (action.type) {
        case ActionNames.SCH:
            return {name: state.name, count: action.result.length, skills: action.result};
        case ActionNames.SUCCESS_SCH:
            return {name: state.name, count: action.payload.length, skills: action.payload};
        case ActionNames.FAILURE_SCH:
            return {name: state.name, count: state.count, skills: state.skills};
        case ActionNames.FETCH_REQUEST_START:
            return {name: state.name, count: state.count, skills: state.skills};
        case ActionNames.FETCH_REQUEST_FINISH:
            return {name: state.name, count: state.count, skills: state.skills};
        default:
            return state;
    }
}