import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';

class Lifecycle extends Component {
    constructor(props){
        super(props)
            this.state={
                name:"kajal"
            }
            console.log("life cycleA construtor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA getderived state from props")
        return null
    }
    componentDidMount(){
        console.log("lifecycleA  component did mount render")
    }
    shouldComponentUpdate( ){
        console.log("life cycleA shld update")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("life cycle q getsnapshotbforeupdte")
    }
    componentDidUpdate(){
        console.log("life cycle a componentdidupdate")
    }
    changestate=()=>{
        this.setState({
            name:"code-evolution"
        })
    }
    render() {
        console.log(" life cyclle A render ")
        return (
            <div>
            <div>lifecycle A</div>
            <button onClick={this.changestate}> add</button>
            <LifeCycleChild/>
                
            </div>
        );
    }
}

export default Lifecycle;
