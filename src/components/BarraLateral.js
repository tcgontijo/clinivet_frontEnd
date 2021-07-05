import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class BarraLateral extends Component {
    render() {
        return (
        <div className="col-lg-3 col-sm-12 d-flex flex-column px-1">
            <div className=" bg-white h-100 p-3 rounded-3">
                <div className="w-100">
                    <Link to="/"><h1 className="text-center my-5 text-primary border w-75 m-auto py-2 bg-primary text-white rounded-3">CliniVet</h1></Link>
                </div>
                <div>
                    <button className="btn btn-primary w-100 my-2">Animal</button>
                </div>
                <div>
                    <button className="btn btn-primary w-100 my-2">Consulta</button>
                </div>
                <div>
                    <button className="btn btn-primary w-100 my-2">Exame</button>
                </div>
                <div>
                    <Link to="/doencas"><button className="btn btn-primary w-100 my-2 p-2">Doenças</button></Link>
                </div>
            </div>
        </div>
        );
    }
}

export default BarraLateral;