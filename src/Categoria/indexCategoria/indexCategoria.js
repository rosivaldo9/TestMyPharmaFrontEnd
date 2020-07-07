import React, { Component } from 'react';
import api from '../../service/service' //import url base
import { Link } from 'react-router-dom';
import Data from './Table';

export default class indexPA extends Component {

    state = {
        Categoria: [], //dados da tabela
        CategoriaInfo: {},  //informações necessarias para paginação e apresentação dos dados
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadDespesa();
    }

    loadDespesa = async () => {
        const response = await api.get(`/categorias`); //buscar dos dados no banco
        const { docs, ...CategoriaInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Categoria: docs, CategoriaInfo }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render() {
        const { Categoria, CategoriaInfo } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <div>
                <Data row={filtro(this.state.Categoria)} />
            </div>
        );
    }
}

function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/detalhesCategoria/${props[i]["_id"]}`}>Detalhes</Link>
    }

    return t;
}






