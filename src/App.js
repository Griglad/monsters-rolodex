import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    //The state is always a json object
    //Constructor initializes state.
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    console.log({ startingArray: this.state.monsters });
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    },
    );
  }


  //This is JSX not html
  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = this.state.monsters
      .filter((monster) => monster.name.toLowerCase().includes(searchField));

    console.warn(filteredMonsters);

    console.log('Render');
    return (
      <div className="App">
        <h1 className="app-title">MONSTERS-ROLODEX</h1>
        <SearchBox className='monsters-search-box' onChangeHandler={onSearchChange} placeholder='Search monsters' />
        {/* filteredMonsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      })*/}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}


export default App;
