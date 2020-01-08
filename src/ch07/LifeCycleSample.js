import React, {Component} from 'react';

class LifeCycleSample extends Component{
    state ={
        number: 0,
        color: null,

    }

    myRef =null; //ref를 설정하는부분

    constructor(props){
    super(props);
    console.log('constructor()호출');
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps()호출');
        if(nextProps.color !== prevState.color){
            return {color: nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount()호출');
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate()호출',nextProps,nextState); 
        return nextState.number% 10 !==4 ; //true일때만 업데이트. 끝자리 4면 리렌더링안함.
    }

    componentWillUnmount(){
        console.log("componentWillUnmout()호출");
    }
    handleClick =() =>{
        this.setState({
            number: this.state.number +1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate()호출');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
      }
componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate()호출', prevProps,prevState);
    if(snapshot){
        console.log('업데이트 되기 직전 색상', snapshot);
    }
}

render(){
    console.log('render()호출');
    const style={
        color: this.props.color
    };


 return(
<div>
    <h1 style={style} ref={ref => this.myRef=ref}>
        {this.state.number}
    
    </h1>
    <p>color:{this.state.color}</p>
    <button onClick={this.handleClick}>더하기</button>
</div>
    
    
        )
    }
}

export default LifeCycleSample;