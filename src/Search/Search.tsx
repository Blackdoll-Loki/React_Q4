import React, {ChangeEvent} from "react";
import searchState from "./searchInterface";
import './Search.css'

export default class Search extends React.Component{
  state: searchState;
  constructor(props: Object){
    super(props)
    this.state = {
      name: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  
  handleChange(e:ChangeEvent<HTMLInputElement>){
    const input = e.target as HTMLInputElement;
    const name:string = input.value;
    this.setState({name: name});
    localStorage.setItem("pokemon", this.state.name)
  }


  render(): React.ReactNode {
    console.log(localStorage.getItem("pokemon"))
    return(
      <section>
        <input type="search" value={this.state.name} className="searchInput" onChange={this.handleChange}/>
        <button className="searchButton">Search</button>
      </section>
    )
  }
}