
import { ActionNames, SearchAction, SuccessSearchAction, FailureSearchAction, SelectTypeAction } from './skillListActionCreator';
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
     * タイプ選択
     */
    typeChecks: {
        checkedA: boolean,
        checkedB: boolean,
        checkedC: boolean
    }

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
                          | FetchRequestFinishAction
                          | SelectTypeAction;

/**
 * デフォルトstateの定義
 */
const initialState:SkillListState = {
    name: 'init',
    count: 0, 
    typeChecks: {
        checkedA: false,
        checkedB: false,
        checkedC: false
    },
    skills: []
};

/**
 * stateとacutionから新しいstateを返却します
 */
export default function reducer(state: SkillListState = initialState, action: SkillListActions): SkillListState {
    switch (action.type) {
        case ActionNames.SCH:
            return {name: state.name, count: action.result.length, typeChecks:action.typeChecks, skills: action.result};
        case ActionNames.SUCCESS_SCH:
            return {name: state.name, count: action.payload.length, typeChecks:state.typeChecks, skills: action.payload};
        case ActionNames.SELECT_TYPE:
            const checks = {
                checkedA: (action.name == 'checkedA') ? action.checked : state.typeChecks.checkedA,
                checkedB: (action.name == 'checkedB') ? action.checked : state.typeChecks.checkedB,
                checkedC: (action.name == 'checkedC') ? action.checked : state.typeChecks.checkedC
            };
            return {name: state.name, count: state.count, typeChecks:checks, skills: state.skills};
        case ActionNames.FAILURE_SCH:
            return {name: state.name, count: state.count, typeChecks:state.typeChecks, skills: state.skills};
        case ActionNames.FETCH_REQUEST_START:
            return {name: state.name, count: state.count, typeChecks:state.typeChecks, skills: state.skills};
        case ActionNames.FETCH_REQUEST_FINISH:
            return {name: state.name, count: state.count, typeChecks:state.typeChecks, skills: state.skills};
        default:
            return state;
    }
}