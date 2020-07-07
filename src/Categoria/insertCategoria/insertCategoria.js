import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './insert.css';


class Categoria extends Component {
    constructor() {
        super();

        this.state = {
            Categoria: {
                    nome: "",
                    descricao: "",
            },
            redirect: false,
        }
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return (
                <Redirect to="/" />,
                <div className="alert alert-success aler" role="alert">
                    <p>Os dados foram salvo com sucesso</p>
                </div>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Enserir Categoriar</legend>
                        <div className="card textForm">
                            <h3 align="center">Categoria</h3>
                            <div className="card-body">

                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="nome"
                                            name="nome"

                                            value={this.state.Categoria.nome}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="descricao">Descricção</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="descricao"
                                            name="descricao"

                                            value={this.state.Categoria.descricao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg float-right" >Cadastrar</button>
                        </div>
                    </fieldset>
                </form>
            )
        }
    }

    // Metodo para atualizar o estado do campo
    handleInputChange = event => {
        const target = event.target;
        const name = target.name;     //pega o nome do camo atravez do target
        const value = target.value;   //pega o valor do camo atravez do target

        this.setState(prevState => ({
            Categoria: { ...prevState.Categoria, [name]: value } //atualizando o estado do campo com o value
        }));
    }

    //metodo para salvar os dados
    handleSubmit = event => {
        fetch("http://localhost:5000/sistema/categoria", {
            method: "post",
            body: JSON.stringify(this.state.Categoria),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {     //vereficar os dados
                if (data.ok) {
                    this.setState({ redirect: true });
                }
            })
        event.preventDefault();
    }
}
export default Categoria;

