import React, { Component } from "react";
import User from './User';

class Users extends Component {
    state = {
        Users: [
            {
                name: "Saleha",
                position: 1
            },
            {
                name: "Kanza",
                position: 3
            },
            {
                name: "Areeba",
                position: 2
            },            
        ],
        title: "Friends List!!!",
    }

    incrementMyPosition = () => {
        // In the control flow state is saved like this

        // this.setState({
        //     tasks: [
        //         {
        //             name: "Saleha",
        //             position: 1
        //         },
        //         {
        //             name: "Kanza",
        //             position: 2
        //         },
        //         {
        //             name: "Areeba",
        //             position: 1
        //         },  
        //     ]
        // })

        const newState = this.state.Users.map((user_var)=> {
            const temp = user_var;
            temp.position += 1;
            if (temp.position > 10){
                console.log("noooo never can be greater than 10");
            }
            else{
                return temp;
            }
        })
        // setting new state
        this.setState({newState});
    }

    render(){
        return (
        <div>
            <button onClick={this.incrementMyPosition}>Increment my Position</button>
            <br/>
            <h1>{this.state.title}</h1>
            <h1>{this.props.title}</h1>
            
            {
                this.state.Users.map((user)=>{
                    return <User position={user.position}>{user.name}</User>
                })
            }
        
        </div>
        )
    }
}

export default Users;