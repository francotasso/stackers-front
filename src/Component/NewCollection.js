import React, { Component } from "react";
import './global/css/App.css';
import Header from './global/HeaderNewC';
import Content from './global/ContentNewC'
import Footer from './global/Footer'
class NewCollection extends Component {

    constructor(...props) {
        super(...props);
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Content codigo={this.props.match.params.codigo} />
                <Footer />
            </div>
        );
    }
}
export default NewCollection;