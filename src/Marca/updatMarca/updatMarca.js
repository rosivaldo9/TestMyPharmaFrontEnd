import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import api from '../../service/service';

class EditarUsuario extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Marca: {
                nome: "",
            },
            redirect: false,
        }
    }

    //metodos que executa junto com a aplicação
    async componentDidMount() {
        const { id } = this.props.match.params; //buscar parametros
        const response = await api.get(`/marca/${id}`); //busca do registro
        this.setState({ Marca: response.data });  // atualizando estado com dados do registro 
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/" />,
            <div className="alert alert-success aler" role="alert">
            <p>Os dados foram salvo com sucesso</p>
        </div>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Criar Marca</legend>
                    <div className="card textForm">
                        <h3 align="center">Marca</h3>
                        <div className="card-body">

                            <div className="form-row">
                                <div className="form-group col-sm-7">
                                <label htmlFor="nome">Nome</label>
                                    <input
                                        className="form-control config-input"
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        
                                        value={this.state.Marca.nome}
                                        onChange={this.handleInputChange} />
                                </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg float-right">Salvar</button>
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
            Marca: {...prevState.Marca, [name]: value } //atualizando o estado do campo com o value
        }));

    };

    //metodo para salvar os dados
    handleSubmit = event => {
        const {id} = this.props.match.params;
        fetch(`http://localhost:5000/sistema/marca/${id}`, 
            {
            method: "put",
            body: JSON.stringify(this.state.Marca),
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

export default EditarUsuario;