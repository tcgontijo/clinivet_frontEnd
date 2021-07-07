import React, { Component } from 'react';
import * as api from "../../services/Endpoints"
import {Link} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

class ListaDoencas extends Component {

    constructor(props) {
        super(props);
        this.state = {doencas: []}
    }
    
    deletaDoenca = (id) => {
        confirmAlert({
            title: 'Atenção',
            message: 'Tem certeza de que deseja excluir esta doença?',
            buttons: [
              {
                label: 'Sim',
                onClick: () => {
                    api.removeDoenca(id)
                    .then(()=> alert("Doença removida com sucesso!"))
                    .then(() => window.location = "/doencas")
                    .catch(err => console.log(err))
                }
              },
              {
                label: 'Não',
                onClick: () => window.location = "/doencas"
              }
            ]
          });        
    }

    componentDidMount = () => {   
        api.getAllDoencas()
        .then(response => {
            const doencas_ = response.data;
            this.setState({doencas: doencas_})
        })
        .catch(err => console.log(err));
    }

   
    
    render = () => {

        return (
                <>
                    <div className="row my-4 text-center">
                        <div className="col-4">
                            <h1>Doenças</h1>
                        </div>
                        <div className="col-8">
                            <Link to="/nova-doenca"><button className="btn btn-primary">Nova Doença</button></Link>
                        </div>
                    </div>
                    <table className="table table-light table-hover text-center">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.state.doencas.map((doenca) => {
                                    return (                                   
                                    <tr key={doenca.id}>
                                        <td>{doenca.nome}</td>
                                        <td>
                                            <Link to={"/edita-doenca/" + doenca.id}><button className="btn btn-success">Editar</button></Link>
                                            <button className="btn btn-danger" onClick={this.deletaDoenca.bind(this, doenca.id)} >Deletar</button>
                                        </td>
                                    </tr>
                                )})}
                        </tbody>
                    </table>
                </>
        );
    }
}

export default ListaDoencas;