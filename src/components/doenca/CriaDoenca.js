import React, { Component } from 'react';
import * as api from "../../services/Endpoints"


class CriaDoenca extends Component {

    constructor(props) {
        super(props);
        this.postDoenca=this.postDoenca.bind(this);
        this.state = {nome:""}
    }

    postDoenca = (e) => {
        e.preventDefault();
        api.createDoenca(this.state)
        .then(() => alert("Doença adicionada com sucesso!"))
        .then(() => this.setState({nome:""}))
        .then(() => window.location = "/doencas")
        .catch(err => console.log(err));
    }

    updateForm = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    render = () => {
        return (
            <div>
                <h1>Cadastro de Doenças</h1>
                <form className="border p-3">
                    <div className="mb-3">
                        <label htmlFor="nome-doenca" className="form-label">Insira o nome da doença:</label>
                        <input type="text" name="nome" className="form-control" id="nome-doenca" value={this.state.nome} onChange={this.updateForm}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.postDoenca}>Enviar</button>
                </form>
            </div>
        );
    }
}

export default CriaDoenca;