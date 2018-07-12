import React, {Component} from 'react';
import './results.css';

/*export const Results = (props) => {
    return()
}*/
class Results extends Component{

    render(){
        const {searchresults} = this.props;
        const ending = '...';
        const length = 60;
        return(
            <div id="albums-container">
                {searchresults.map((album, i) => {
                    return(
                        <div className="single-album" key={i}>
                            <img src={album.artworkUrl100} alt={album.collectionName} />
                            <h3>{album.collectionName.length > length 
                                ? album.collectionName.substring(0, length - ending.length) + ending
                                : album.collectionName
                                }</h3>
                        </div>

                    );
                })}
            </div>
            )
    }
}
export default Results;