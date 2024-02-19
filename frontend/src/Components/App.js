import './App.css';
import axios from 'axios';
import PlayerList from './Player/PlayerList';
import PlayerForm from './Player/PlayerForm';
import PlayerSingle from './Player/PlayerSingle';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      players:[],
      currentPlayer:{},
    }

    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
  }

  updateCurrentPlayer(item){
    this.setState({
      currentPlayer:item,
    })

  }

  componentDidMount(){
    const url = 'http://localhost:4000/players';
    axios.get(url)
    .then((Response)=>{
      this.setState({
        players:Response.data
      })
    })
    .catch((error)=>{
      console.log(error);
    });
  }

 render () {
  return (
    <div className="container-fluid">
      <div className="row">
          <nav>
          <div className="nav-wrapper blue lighten-1">
            <a href="#" className="brand-logo">Soccer</a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s3"><PlayerList players={this.state.players} updateCurrentPlayer = {this.updateCurrentPlayer}/></div>
        <div className="col s9"><PlayerSingle player={this.state.currentPlayer}/></div>
      </div>
      <div className="row">
        <div className="col s12"><PlayerForm/></div>
      </div>
    </div>
  );
}
}

export default App;
