import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'


class ReviewComponent extends React.Component {

    state = {
        like: 0,
        dislike: 0
    };

    //Listener method
    onLike = () => {
        this.setState(function (prvState) {
            console.log('previous state ', prvState)
            //immutabilty logic: we never modifify state directly
            let like = prvState.like + 1
            let dislike = prvState.dislike;
            return {
                like,
                dislike
            }
        });
    }
    onDislike = () => {
        this.setState(function (prvState) {
            console.log('previous state ', prvState)
            //immutabilty logic: we never modifify state directly
            let like = prvState.like
            let dislike = prvState.dislike + 1;
            return {
                like,
                dislike
            }
        });
    }


    render() {
        console.log('Current State', this.state);
        return <div className="container">
            <h1>Review Application</h1>
            <h3>Like : {this.state.like} </h3>
            <h3>DisLike : {this.state.dislike} </h3>
            <button className="btn btn-success" onClick={this.onLike}>Like</button>
            <button className="btn btn-success" onClick={this.onDislike}>DisLike</button>

        </div>
    }
}
const Application = () => <ReviewComponent />

ReactDOM.render(<Application />, document.getElementById('root'));
