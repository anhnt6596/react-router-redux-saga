import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import LeftSideBar from '../LeftSideBar';
import MainPage from '../MainPage';
import OtherPage from '../OtherPage';
import NotFoundPage from '../NotFoundPage';

export default class Main extends React.Component {
    componentDidMount() {
        !this.props.isLogin && this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                <LeftSideBar/>
                <div>
                    <Header/>
                    <div style={{ overflowY: 'auto', height: 'calc(100vh - 100px)' }}>
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route path="/other" component={OtherPage} />
                            <Route path="" component={NotFoundPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
