//state as prop

import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

//container component
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

            return {
                ...prvState, dislike
            }

        });
    }


    render() {
        return <div className="container">
            {/**state as prop: dynamic props */}
            <ReviewDisplay {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
        </div>
    }
}

//presentational component : prop dynamically
const ReviewDisplay = props => {
    return <div>
        <h1>Review Application</h1>
        <h3>Like : {props.like} </h3>
        <h3>DisLike : {props.dislike} </h3>
        <button className="btn btn-success" onClick={props.onLike}>Like</button>
        <button className="btn btn-success" onClick={props.onDislike}>DisLike</button>
    </div>
}

const Application = () => <ReviewComponent />

ReactDOM.render(<Application />, document.getElementById('root'));