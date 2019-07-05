import axios from 'axios';
import {Skill} from './components/skillListReducer';

export class API {

    /**
     * スキル取得
     */
    public async getSkillList(): Promise<Array<Skill>> {
        return await this.invokeGet();
    }

    /**
     * Rest APIのGETを呼出します。
     * @return {Promise<any>} レスポンス
     */
    private async invokeGet(): Promise<any> {
        const { data } = await axios.get('http://localhost:3000/skills');
        return data;
    }
}