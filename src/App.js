




import React from 'react';
import './App.css';
import CheckboxTree from 'react-checkbox-tree';
 
const nodes = [{
    value: 'vegetable',
    label:   <div>Vegetable
                  <button type="button" id="adddata" onClick="addItem()">+</button></div>,
    children: [
        { value: 'tomato', label: 'Tomato' },
        { value: 'onion', label: 'Onion' },
        
    ],
},
              {
    value: 'fruit',
    label:   <div>Fruit
                  <button type="button" id="adddata" >+</button></div>,
    children: [
        { value: 'apple', 
         label: 'Apple',
         children: [
             { value: 'greenapple', label: <div>Greenapple
                  <button type="button" id="adddata" >+</button></div> },
         ],
        },
        { value: 'mango', label: 'Mango' },
    ],
}]; 
let getId="";
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item:"",
            checked: [],
            expanded: [],
    }
    this.addData=this.addData.bind(this);
    };

    
    onChangeHandler(event){
        var inputVal = event.target.value; 
        this.setState({
            item:inputVal
        })
            
    }
    addItem(){
        input type="text" value={this.state.item} onChange={this.onChangeHandler} 
    }

                  
 
    render() {
        return (
            <div>
            
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />

            </div>
            
        );
    }
}

export default App;
