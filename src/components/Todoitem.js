import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoitem extends Component {
    render() {
        return (
            <div style={{backgroundColor :'#f4f4f4'}}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

Todoitem.propTypes={
    todo : PropTypes.object.isRequired
}
