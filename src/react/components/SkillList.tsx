import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Card, CardContent, Checkbox, FormGroup, FormControlLabel, Paper } from '@material-ui/core';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SkillListState, Skill } from './skillListReducer';
import { ActionDispatcher } from "./Container";
import { ComTableHead } from './ComTableHead';


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
     * チェックボックス操作ハンドラプロパティ
     */
    private handleClickType = (type: string) => (event: React.ChangeEvent<{checked: boolean}>) => {
        this.props.actions.selectType(type, event.target.checked);
    }

    /**
     * レンダリングします。
     */
    public render(): JSX.Element {

        const { classes } = this.props;
        const { typeChecks, skills } = this.props.value;

        return (
            <React.Fragment>
                <Typography component="h2" variant="h4" gutterBottom>スキル</Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox checked={typeChecks.checkedA} onChange={this.handleClickType('checkedA')} value="checkedA" />} label="1" />
                            <FormControlLabel control={<Checkbox checked={typeChecks.checkedB} onChange={this.handleClickType('checkedB')} value="checkedB" />} label="2" />
                            <FormControlLabel control={<Checkbox checked={typeChecks.checkedC} onChange={this.handleClickType('checkedC')} value="checkedC" />} label="3" />
                             <Button variant="contained" color="primary" className={classes.button}>
                                <SearchIcon className={classes.leftIcon} onClick={this.handleSearchBtn}>検索</SearchIcon>
                                検索
                            </Button>
                            <Button variant="contained" color="primary" className={classes.button}>
                                <SearchIcon className={classes.leftIcon} onClick={this.handleResetBtn}>リセット</SearchIcon>
                                リセット
                            </Button>
                        </FormGroup>
                    </CardContent>
                </Card>
                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <ComTableHead>
                        </ComTableHead>
                        <TableBody>
                            {skills.map((skill: Skill, index: number) => { 
                                return (
                                    <TableRow key={index}>
                                        <TableCell key="name">{skill.name}</TableCell>
                                        <TableCell key="type">{skill.type}</TableCell>
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
    card:{},
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
        margin: theme.spacing()
    },
    leftIcon: {
        marginRight: theme.spacing()
    }
});

/**
 * コンポーネントにスタイルを設定してエクスポートします。
 */
export default withStyles(styles)(SkillList);