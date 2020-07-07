import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './insert.css';
import api from '../../service/service' //import url base



class CriaProduto extends Component {
    constructor() {
        super();

        this.state = {
            Produto: {
                nome: "",
                descricao: "",
                preco: Number,
                categoria: "",
                marca: ""

            },
            Categoria: [], //dados da tabela
            CategoriaInfo: {},  //informações necessarias para paginação e apresentação dos dados
            Marca: [],
            Marcainfo: {},
            redirect: false,
        }
    }

    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadCategoria();
        this.loadMarca();
    }

    loadCategoria = async () => {
        const response = await api.get(`/categorias`); //buscar dos dados no banco
        const { docs, ...CategoriaInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Categoria: docs, CategoriaInfo }); // setando o estado de Pu.At. com informações da lista do banco 
    }
    loadMarca = async () => {
        const response = await api.get(`/marcas`); //buscar dos dados no banco
        const { docs, ...MarcaInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Marca: docs, MarcaInfo }); // setando o estado de Pu.At. com informações da lista do banco 
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return (
                <Redirect to="/page26" />,
                <div className="alert alert-success aler" role="alert">
                    <p>Os dados foram salvo com sucesso</p>
                </div>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend align="center">Enserir Produto</legend>
                        <div className="card textForm">
                            <h3 align="center">Produto</h3>
                            <div className="card-body">

                                <div className="form-row">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="nome">Nome</label>
                                        <input
                                            className="form-control config-input"
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            required

                                            value={this.state.Produto.nome}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="preco">Preço</label>
                                        <input
                                            className="form-control config-input"
                                            type="Number"
                                            id="preco"
                                            name="preco"
                                            required

                                            value={this.state.Produto.preco}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className="form-group col-sm-6">
                                        <label htmlFor="descricao">Descrição:</label>
                                        <textarea
                                            row="3"
                                            className="form-control config-input"
                                            type="text"
                                            id="descricao"
                                            name="descricao"
                                            required

                                            value={this.state.Produto.descricao}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="categoria">Categoria</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="categoria"
                                            name="categoria"

                                            value={this.state.Produto.categoria}
                                            onChange={this.handleInputChange} >

                                            <option></option>
                                            {this.state.Categoria.map(Categoria => ( //mapeamento do Categoria
                                                <option>{Categoria.nome}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group col-sm-3">
                                        <label htmlFor="marca">Marca</label>
                                        <select
                                            className="form-control config-input"
                                            type="text"
                                            id="marca"
                                            name="marca"

                                            value={this.state.Produto.marca}
                                            onChange={this.handleInputChange} >

                                            <option></option>
                                            {this.state.Marca.map(Marca => ( //mapeamento do Marca
                                                <option>{Marca.nome}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg float-right" >Cadastrar</button>
                            </div>
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
            Produto: { ...prevState.Produto, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        fetch("http://localhost:5000/sistema/produto", {
            method: "post",
            body: JSON.stringify(this.state.Produto),
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

export default CriaProduto;

