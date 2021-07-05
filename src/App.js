import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraLateral from './components/BarraLateral';
import ListaDoencas from './components/doenca/ListaDoencas';
import CriaDoenca from './components/doenca/CriaDoenca';
import EditaDoenca from './components/doenca/EditaDoenca';
import Home from './components/Home';
import Footer from './components/Footer'

class App extends Component {
    render() {
        return ( 
            <Router>
                <div className="bg-primary">
                    <div className="container-fluid row min-vh-100 p-1 m-auto">
                        <BarraLateral/>
                        <div className="col-lg-9 col-sm-12 px-0">
                            <div className=" bg-white h-100 rounded-3 p-4">
                                <Switch>
                                    <Route exact path="/"><Home/></Route>
                                    <Route exact path="/doencas"><ListaDoencas/></Route>
                                    <Route exact path="/nova-doenca"><CriaDoenca/></Route>
                                    <Route exact path="/edita-doenca/:id"><EditaDoenca/></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid row m-auto bg-primary">
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;