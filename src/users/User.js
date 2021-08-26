import React from 'react';

const User = (props) => {
    let priority = props.position ? props.position : 'N/A';
    return (
        <div>
            Name: {props.children} ,
            Priority: {priority}
        </div>
    )
}

export default User;