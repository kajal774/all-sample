import React, { Component } from 'react';

class LifeCycleChild extends Component {
    constructor(props){
        super(props)
            this.state={
                name:"kajal"
            }
            console.log("life cycleB construtor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycleB getderived state from props")
        return null
    }
    componentDidMount(){
        console.log("lifecycleB  did update render")
    }
    shouldComponentUpdate( ){
        console.log("life cycleb shouldcomponentupdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("life cycleb getsnapshotbforeupdte")
    }
    componentDidUpdate(){
        console.log("life cycle b componentdidupdate")
    }
    render() {
        console.log(" life cycleB render ")
        return (
            <div>
               child component
                
            </div>
        );
    }
}

export default LifeCycleChild;
