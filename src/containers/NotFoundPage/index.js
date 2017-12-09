import React from 'react';

export default class NotFoundPage extends React.Component {
    componentDidMount() {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                Page not Found!!
            </div>
        );
    }
}
