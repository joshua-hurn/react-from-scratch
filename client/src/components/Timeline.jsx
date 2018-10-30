import React, { Component } from "react";
import Card from "./chirpCard";

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirps: []
    };
  }
  
  componentDidMount() {
    fetch("/api/chirps")
      .then(res => res.json())
      .then(data => {
        let chirps = Object.keys(data).map(chirpId => {
          return {
            id: chirpId,
            name: data[chirpId].author,
            text: data[chirpId].text
          };
        });
        console.log(chirps);
        chirps.pop();
        chirps.reverse();
        this.setState({ chirps });
      })
      .catch(e => console.log(e))
  }

  renderCards() {
    return this.state.chirps.map(chirp => {
      return <Card key={chirp.id} chirp={chirp} />;
    });
  }

  render() {
    return <div className="container">
    {this.renderCards()}
    </div>;
  }
}

export default MainPage;
