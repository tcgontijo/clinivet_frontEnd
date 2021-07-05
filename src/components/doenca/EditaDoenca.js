import React, { Component } from 'react';
import * as api from "../../services/Endpoints"

class EditaDoenca extends Component {
    constructor(props) {
        super(props);
        this.putDoenca=this.putDoenca.bind(this);
        this.state = {id:"", nome: ""}
    }

    componentDidMount = () => {     
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf('/') + 1);   
        api.getDoenca(id)
        .then(response => {
            const doenca = response.data;
            this.setState({id:doenca.id, nome: doenca.nome});
        })
        .catch(err => console.log(err));
    }    
    
    putDoenca = () => {
        api.updateDoenca(this.state.id, {nome: this.state.nome})
        .then(() => alert("Doença alterada com sucesso!"))
        .then(() => window.location = "/doencas")
        .catch(err => console.log(err));;
    }

    updateForm = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    render = () => {
        return (
            <div>
                <h1>Edição de Doenças</h1>
                <form className="border p-3">
                    <div className="mb-3">
                        <label htmlFor="nome-doenca" className="form-label">Altere o nome da doença:</label>
                        <input type="text" name="nome" className="form-control" id="nome-doenca" value={this.state.nome} onChange={this.updateForm}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.putDoenca}>Salvar</button>
                </form>
            </div>
        );
    }
}

export default EditaDoenca;