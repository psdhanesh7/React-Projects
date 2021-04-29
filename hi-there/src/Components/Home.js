import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import Pokeball from '../pokeball.png';
// import { connect } from 'react-redux';

class Home extends Component {

    // state = {
    //     posts : [ ]
    // }

    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 posts : res.data.slice(0,10)
    //             })
    //         })
    // }
    render() {

        return (
            <div className = "container home">
                <h4 className="center">Home</h4>
                <h5 className="center">Hello World!</h5>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         posts : state.posts
//     }
// }

export default Home;