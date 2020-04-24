import React, { Component } from 'react';
import axios from 'axios'


class Beers extends Component {

    state = {
        beers: ''
    }

    async componentDidMount() {
        let beersList = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
        this.setState({
            beers: beersList.data
        })
    }

    displayBeers = () => {
        let beersList = [...this.state.beers]
        // console.log(beersList)

        return beersList.map((beer) => {
            console.log(beer)
            return (
                <div>
                    <img src={beer.image_url} className="beerPic" />
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                    <h5>Created by: {beer.contributed_by}</h5>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.displayBeers()}
                </ul>
            </div>
        );
    }
}

export default Beers;