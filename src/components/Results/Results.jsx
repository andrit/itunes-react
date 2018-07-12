import React, {Component} from 'react';
import {Modal} from '../resultsmodal';
import './results.css';

/*export const Results = (props) => {
    return()
}*/
class Results extends Component{
    state={
        showModal: false
    }
    handleOpenModal = () => {
        this.setState({
            showModal: true
        })
    }
    handleCloseModal = () => {
        this.setState({
            showModal: false
        })
    }
    render(){
        const {searchresults} = this.props;
        const ending = '...';
        const length = 60;
        return(
            <div id="albums-container">
                {searchresults.map((album, i) => {
                    return(
                        <React.Fragment>
                        <div className="single-album" onClick={this.handleOpenModal} key={i}>
                            <img src={album.artworkUrl100} alt={album.collectionName} />
                            <h3>{album.collectionName.length > length 
                                ? album.collectionName.substring(0, length - ending.length) + ending
                                : album.collectionName
                                }</h3>
                        </div>
                        
                        {this.state.showModal
                            ?  <Modal closeModal={this.handleCloseModal} artistpic={album.artistViewUrl} name={album.artistName} genre={album.primaryGenreName} track={album.trackName} album={album.collectionName} />
                            : <br/>}
                        </React.Fragment>
                    );
                })}
            </div>
            )
    }
}
export default Results;