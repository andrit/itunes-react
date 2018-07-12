import React, {Component} from 'react';

import './results.css';

/*export const Results = (props) => {
    return()
}*/
class Results extends Component{
    
    render(){
        const {searchresults} = this.props;
        return(
            <div id="albums-container">
                {searchresults.map((album, i) => {
                    return(
                        <div className="single-album" key={i}>
                            <img src={album.artworkUrl100} alt={album.collectionName} />
                            <h3>{album.collectionName}</h3>
                        </div>
                    );
                })}
            </div>
            )
    }
}
export default Results;