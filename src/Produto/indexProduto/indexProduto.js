import React, { Component } from 'react';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import Data from './Table';

export default class indexProduto extends Component {

    state = {
        Produtos: [], //dados da tabela
        ProdutosInfo: {},  //informações necessarias para paginação e apresentação dos dados
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadProdutos();
    }

    loadProdutos = async () => {
        const response = await api.get(`/produtos`); //buscar dos dados no banco
        const { docs, ...ProdutosInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Produtos: docs, ProdutosInfo }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render() {
        const { Produtos, ProdutosInfo } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <div>
                <Data row={filtro(this.state.Produtos)} />
            </div>
        );
    }
}

function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["categoriaa"] = props[i]["nome"];
        t[i]["marcaa"] = props[i]["marca"];
        t[i]["detalhes"] = <Link to={`/detailsProduto/${props[i]["_id"]}`}>Detalhes</Link>
    }
    return t;
}










