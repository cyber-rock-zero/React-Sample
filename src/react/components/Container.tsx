import { Dispatch } from 'redux';
import { selectType, successSearchSkill } from './skillListActionCreator';
import { API } from '../api';
import { connect } from 'react-redux';
import SkillList from './SkillList';
import {Skill} from './skillListReducer';
import {ReduxAction, ReduxState} from '../store'

/**
 * Actionをdispachするクラス
 */
export class ActionDispatcher {

    constructor(private dispatch: Dispatch<ReduxAction>) {
        this.dispatch = dispatch
    }

    /**
     * スキルの取得
     */
    public async getSkill(): Promise<void> {
        try {
            let api = new API();
            const list = await api.getSkillList();
            this.dispatch(successSearchSkill(list));
        } catch (e) {
        }
    }

    /**
     * リセット
     */
    public resetSkill(): void {
        const list: Array<Skill> = [];
        this.dispatch(successSearchSkill(list));
    }

    /**
     * タイプ選択
     */
    public selectType(name: String, checked: boolean): void {
        this.dispatch(selectType(name, checked));
    }
}

/**
 * props.valueにstateをマッピングします
 * @param state ステート
 */
const mapStateToProps = (state: ReduxState) => ({
    value: state.skillList
});
  
/**
 * props.actionsにdispatchをマッピングします
 * @param dispatch アクション
 */
const mapDispatchToProps = (dispatch: Dispatch<ReduxAction>) => ({
    actions: new ActionDispatcher(dispatch)
});

/**
 * SkillListのpropsにstateとdispathを接続します
 * @param state ステート
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SkillList);