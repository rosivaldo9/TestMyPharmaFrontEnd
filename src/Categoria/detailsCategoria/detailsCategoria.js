import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";
import '../indexCategoria/index.css';




export default class PublicoPA extends Component {
    state = {
       Categoria: {
            nome: "",
            descricao:"",
        }
    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/categoria/${id}`);  // busca da lista no banco de dados
        this.setState({Categoria: response.data });         //setando dados doCategoria com dados da lista
    }

    render() {
        const {Categoria } = this.state;  //Categoria no seu estado atual

        return (  
        <form onSubmit={this.handleSubmit}>
            <fieldset>
            <legend align="center">Enserir Categoria</legend>
                <div className="card textForm">
                    <h3 align="center">Categoria</h3>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-sm-3">
                            <label  htmlFor="nome">Nome</label>
                                <input
                                    className="form-control config-input"
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    disabled="true"
                                   
                                    value={Categoria.nome}/>
                            </div>
                            <div className="form-group col-sm-3">
                            <label  htmlFor="descricao">Descrição</label>
                                <input
                                    className="form-control config-input"
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    disabled="true"
                                   
                                    value={Categoria.descricao}/>
                            </div>
                          
                    </div>
                    <Link to={`/editCategoria/${Categoria._id}`}><button type="button" className="btn btn-warning btn-lg">Editar</button></Link>
                    <Link to={`/deleteCategoria/${Categoria._id}`}><button  type="button" className="btn btn-info btn-lg">Deletar</button></Link>
                    </div>
                  
                    </div>

            </fieldset>
        </form>
       );
    }
}