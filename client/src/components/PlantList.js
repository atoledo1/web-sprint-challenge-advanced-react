import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plants: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/plants")
      .then((response) => {
        console.log(response);
        this.setState({
          plants: response.data.plantsData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
