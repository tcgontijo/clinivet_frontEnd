import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="navbar navbar-expand-lg navbar-light bg-light text-center bg-primary">
                 <button className="btn btn-dark mx-auto" onClick = {()=> window.location = "https://clinivet-tulio.herokuapp.com/swagger-ui.html#/"}>Swagger-ui</button>
            </footer>
        );
    }
}

export default Footer;