import React, { Component } from 'react';
import * as firebase from 'firebase';
import SensorConfig from './components/sensorconfig'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      temperature: []
    }
  }

  componentDidMount(){
    const connectedRef = firebase.database().ref("sensors");
    connectedRef.on("child_added", (snap) => {
    this.setState({temperature:[ ...this.state.temperature, {
            val: snap.val(),
            id: snap.key
        }
        ]})    
        console.log('sensors', snap.val(), this.state.temperature);
    });

    connectedRef.on("child_removed", (snap) => {
        this.setState({
          temperature: this.state.temperature.filter((temperatura) => {
              return temperatura.id != snap.key
            })
        }); 
    });
  }

  valueChange = (value, key) => {
    console.log('change value', value, key);
  }

  
  render() {

    const sensors = this.state.temperature.map((temperatura, index) => {
      return (
        <SensorConfig key={temperatura.id} id={temperatura.id} value={temperatura.val} valueChange={this.valueChange}/>
      )
    })

    return (
      <div className="App">
        {sensors}
      </div>
    );
  }
}

export default App;
