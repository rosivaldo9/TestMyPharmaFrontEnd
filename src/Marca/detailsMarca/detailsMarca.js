import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexMarca/index.css';

export default class DetailsMarca extends Component {
    state = {
        Marca: {
            nome: "",
        }
    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/Marca/${id}`);  // busca da lista no banco de dados
        this.setState({ Marca: response.data });         //setando dados doMarca com dados da lista
    }

    render() {
        const { Marca } = this.state;  //Marca no seu estado atual

        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend align="center">Enserir Marca</legend>
                    <div className="card textForm">
                        <h3 align="center">Marca</h3>
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group col-sm-3">
                                    <label htmlFor="valor">Nome</label>
                                    <input
                                        className="form-control config-input"
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        disabled="true"

                                        value={Marca.nome} />
                                </div>

                            </div>
                            <Link to={`/page24/${Marca._id}`}><button type="button" className="btn btn-warning btn-lg">Editar</button></Link>
                            <Link to={`/page25/${Marca._id}`}><button type="button" className="btn btn-info btn-lg">Deletar</button></Link>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}