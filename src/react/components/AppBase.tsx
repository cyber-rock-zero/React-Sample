import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Theme } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
//import SkillList from './Container';
import MenuLayout from './MenuLayout';

/**
 * テーマを定義します。
 */
const theme: Theme = createMuiTheme();

/**
 * 基底プロパティ
 */
export interface AppBaseProps {}

/**
 * 基底コンポーネントです。
 */
export default class AppBase extends React.Component<AppBaseProps, {}> {
    /**
     * レンダリングします。
     */
    public render(): JSX.Element {
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MenuLayout} />
                        <Route path="/menu" component={MenuLayout} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}