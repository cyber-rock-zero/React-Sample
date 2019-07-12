import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core';
import { SkillListState, Skill } from './skillListReducer';
import { ActionDispatcher } from "./Container";


/**
 * プロパティインターフェースです。
 */
export interface SkillListProps extends WithStyles<typeof styles> {
    value: SkillListState,
    actions: ActionDispatcher
}

/**
 * スキルリストコンポーネントです。
 */
class SkillList extends React.Component<SkillListProps, SkillListState> {
    
    /**
     * オーダー種類
     */
    public orderType: "asc" | "desc" | undefined = "asc";

    /**
     * リセットボタンクリックハンドラプロパティ
     */
    private handleResetBtn = () => {
        this.props.actions.resetSkill();
    }
           
    /**
     * 検索ボタンクリックハンドラプロパティ
     */
    private handleSearchBtn = () => {
        this.props.actions.getSkill();
    }

    /**
     * レンダリングします。
     */
    public render(): JSX.Element {

        const { classes } = this.props;
        const { name, count, skills } = this.props.value;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h4" gutterBottom>スキル{name}-{count}</Typography>
                <Button onClick={this.handleResetBtn}>リセット</Button>
                <Button onClick={this.handleSearchBtn}>検索</Button>
                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableBody>
                            {skills.map((skill: Skill) => { 
                                return (
                                    <TableRow key={skill.key}>
                                        <TableCell>{skill.name}</TableCell>
                                        <TableCell>{skill.type}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}

/**
 * スタイルを定義します。
 */
const styles = (theme: Theme) => createStyles({
    paper: {
        width: '100%',
        overflowX: 'auto'
    },
    tableWrapper: {
       overflowX: 'auto'
    },
    table: {
       minWidth: 700
    },
    row: {
       '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    },
    button: {
        //margin: theme.spacing.unit
    }
});

/**
 * コンポーネントにスタイルを設定してエクスポートします。
 */
export default withStyles(styles)(SkillList);