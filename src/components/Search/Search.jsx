import React, {Component} from 'react';

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
        const ARTIST_NAME= this.state.artistname;
        const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}`;
        fetch(url)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
            } else {
            return Promise.reject(new Error(response.statusText))
            }
        })
        .then((res)=>{
            res.json()
        })
        .then(
            this.props.setlookupresults
        )
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