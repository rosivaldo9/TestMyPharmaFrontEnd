import React, { Component } from 'react';
import api from '../../service/service';
import { Link } from "react-router-dom";

export default class DetailsProduto extends Component {
    state = {
        Produto: {
            nome: "",
            descricao: "",
            preco: Number,
            marca: "",
            categoria: ""
        }
    }

    async componentDidMount() {                               //metodo executa no momento da execução da aplicação
        const { id } = this.props.match.params;                     // pegando o ID da url através do props
        const response = await api.get(`/produto/${id}`);  // busca da lista no banco de dados
        this.setState({ Produto: response.data });         //setando dados do Produto com dados da lista
    }

    render() {
        const { Produto } = this.state;  // Produto no seu estado atual

        return (<form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend align="center">Enserir Produto</legend>
                <div className="card textForm">
                    <h3 align="center">Produto</h3>
                    <div className="card-body">

                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="nome">nome</label>
                                <input
                                    className="form-control config-input"
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    disabled="true"
                                    value={Produto.nome} />
                            </div>
                            <div className="form-group col-sm-3">
                                <label htmlFor="preco">Preço</label>
                                <input
                                    className="form-control config-input"
                                    type="Number"
                                    id="preco"
                                    name="preco"
                                    disabled="true"

                                    value={Produto.preco} />
                            </div>

                            <div className="form-group col-sm-6">
                                <label htmlFor="descricao">descricao:</label>
                                <textarea
                                    row="3"
                                    className="form-control config-input"
                                    type="text"
                                    id="descricao"
                                    name="descricao"
                                    disabled="true"

                                    value={Produto.descricao} />
                            </div>


                            <div className="form-group col-sm-6">
                                <label htmlFor="marca">Marca:</label>
                                <textarea
                                    row="3"
                                    className="form-control config-input"
                                    type="text"
                                    id="marca"
                                    name="marca"
                                    disabled="true"

                                    value={Produto.marca} />
                            </div>

                            <div className="form-group col-sm-6">
                                <label htmlFor="categoria">Categoria:</label>
                                <textarea
                                    row="3"
                                    className="form-control config-input"
                                    type="text"
                                    id="categoria"
                                    name="categoria"
                                    disabled="true"

                                    value={Produto.categoria} />
                            </div>
                        </div>
                        <Link to={`/editProduto/${Produto._id}`}><button type="button" className="btn btn-warning btn-lg">Editar</button></Link>
                        <Link to={`/deleteProduto/${Produto._id}`}><button type="button" className="btn btn-info btn-lg">Deletar</button></Link>
                    </div>
                </div>
            </fieldset>
        </form>
        );
    }
}