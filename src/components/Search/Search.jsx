import React, {Component} from 'react';
import axios from 'axios';

import './search.css';

class Search extends Component{
    state = {
        artistname: null
    }
    onEnterName = (e) =>{
        const name = e.target.value;
        this.setState({
            artistname: name
        })
    }
    onClick = () => {
        const ARTIST_NAME= this.state.artistname.split(' ').join('+');
        const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}`;
        axios.get(url)
        .then(res => {
            var nodes = res.data.results;
            var nodesArray = Object.keys(nodes).map(function(k,v) { [nodes[k], nodes[v]] });
            var narr = Array.from(nodes);
            console.log('res: ', nodes)
            console.log('res narr: ', narr)
            console.log('res to arr: ', nodesArray);
            console.log('res: ', typeof(nodesArray))
            this.props.setLookupResults(narr)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    render(){
        return(
            <form>
                <h2>Find Your Favorite Artist</h2>
                <label htmlFor="artist-input">
                    <input 
                        name="artist-input"
                        value={this.state.artistname}
                        onChange={this.onEnterName}/>
                </label>
                <button type="button" onClick={this.onClick}>Find Your Faves</button>
            </form>
        )
    }
}
export default Search;