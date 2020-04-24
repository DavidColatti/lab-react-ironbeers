import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HomePageSection from './HomePageSection'


export default class Home extends Component {
    render() {
        return (
            <div>
               <Link to="/beers">
					<img src="images/beers.png" alt="beers" />
				</Link>
				<HomePageSection
					description="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
					section="All Beers"
				/>
				<Link to="/random-beer">
					<img src="images/random-beer.png" alt="beers" />
				</Link>
				<HomePageSection
					description="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
					section="Random Beer"
				/>
				<Link to="/new-beer">
					<img src="images/new-beer.png" alt="beers" />
				</Link>
				<HomePageSection
					description="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
					section="New Beer"
				/> 
            </div>
        )
    }
}
