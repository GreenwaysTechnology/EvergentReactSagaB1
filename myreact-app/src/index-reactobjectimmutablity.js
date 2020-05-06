
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
        this.setState(prvState => {
            console.log('previous state ', prvState)
            //immutabilty logic: we never modifify state directly
            let like = prvState.like + 1
            //  let dislike = prvState.dislike;
            //way 1: plain js
            // return {
            //     like,
            //     dislike
            // }
            //way 2: using Object.assign
            // return Object.assign({}, prvState, { like })
            //way 3 Using spread notation
            return {
                ...prvState, like
            }
        });
    }
    onDislike = () => {
        this.setState(prvState => {
            console.log('previous state ', prvState)
            //immutabilty logic: we never modifify state directly
            let dislike = prvState.dislike + 1;
            //way 1: plain js
            // return {
            // return {
            //     like,
            //     dislike
            // }
            //return Object.assign({}, prvState, { dislike })
            return {
                ...prvState, dislike
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