import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../LoginPage';
import Main from '../Main';
import NotFoundPage from '../NotFoundPage';
import RegisterPage from '../RegisterPage';

import styles from './styles';

import { increase } from './actions';

class App extends React.Component {
    componentDidMount() {
        console.log('-AnhNT-', this.props.isLogin);
    }

    render() {
        const { isLogin } = this.props;
        return (
            <div style={styles.appWrapper}>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/" render={()=><Main isLogin={isLogin} {...this.props}/>} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.appReducer.isLogin,
});

const mapDispatchToProps = ({
    increase,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
