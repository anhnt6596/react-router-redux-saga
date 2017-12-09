import React from 'react';

export default class LeftSideBar extends React.Component {
    render() {
        return (
            <div style={styles.wrapper} >
                LeftSideBar
            </div>
        );
    }
}

const styles = {
    wrapper: {
        width: 200,
        height: '100vh',
        backgroundColor: '#aaa',
        color: '#fff',
        float: 'left',
    },
};