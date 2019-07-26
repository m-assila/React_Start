import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todoitem extends Component {
    render() {
        return (
            <div style={ItemStyle}>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

//Use a variable for styling

const ItemStyle={
    backgroundColor :'#f4f4f4'
}

Todoitem.propTypes={
    todo : PropTypes.object.isRequired
}
