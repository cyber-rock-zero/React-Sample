import { Action, createStore, combineReducers } from 'redux';
import skillListReducer, { SkillListState, SkillListActions } from './components/skillListReducer';

/**
 * storeの作成
 */
export default createStore(
    combineReducers({
      skillList: skillListReducer
    })
);

/**
 * ルートstateの定義
 */
export type ReduxState = {
  skillList : SkillListState
}
/**
 * ルートactionの定義
 */
export type ReduxAction = SkillListActions | Action;
