import React, { Component } from 'react';

class IterationSample extends Component {
    
    state = {
        names: ['눈사람','얼음','눈'],
        name:''
    };
    
    handleChange = (e) => {
        this.setState({
        name: e.target.value
        });
        console.log(this.state);
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
            
        });
        console.log(this.state);
    }
    
    handleRemove = (index) => {
        // const { names} = this.state;
        const names = this.state.names;
        this.setState({
            names: [
                ...names.slice(0,index),
                ...names.slice(index + 1,names.length)
            ]
        });
        console.log(this.state);
    }

    render() {
        const nameList = this.state.names.map(
        (name,index)=> (
        <li key={index} onDoubleClick={ ()=>this.handleRemove(index)}>{name}</li>
        )
    );

    return(
        <div>
            <input
            onChange={this.handleChange}
            value={this.state.name}>
            </input>
            <button onClick={this.handleInsert}>추가</button>
            <ul>
            {nameList}
            </ul>
        </div>
        );
    }
}

export default IterationSample;
