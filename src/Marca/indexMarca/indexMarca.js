import React, { Component } from 'react';
import api from '../../service/service' //import url base
import { Link } from 'react-router-dom';
import Data from './Table';

export default class indexPA extends Component {

    state = {
        Marca: [], //dados da tabela
        MarcaInfo: {},  //informações necessarias para paginação e apresentação dos dados
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadDespesa();
    }

    loadDespesa = async () => {
        const response = await api.get(`/marcas`); //buscar dos dados no banco
        const { docs, ...MarcaInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({ Marca: docs, MarcaInfo }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    render() {
        const { Marca, MarcaInfo } = this.state; // definir variaveis em seu estado atual, carregadas com a lista
        return (
            <div>
                <Data row={filtro(this.state.Marca)} />
            </div>
        );
    }
}

function filtro(props) {
    var t = []
    for (var i = 0; i < props.length; i++) {
        t.push(props[i]);
        t[i]["detalhes"] = <Link to={`/page28/${props[i]["_id"]}`}>Detalhes</Link>
    }
    return t;
}




