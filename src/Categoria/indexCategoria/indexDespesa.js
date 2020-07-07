/*import React, { Component } from 'react';
import Moment from 'react-moment';
import api from '../../service/service';//import url base
import { Link } from 'react-router-dom';
import './index.css'
import $ from 'jquery';
import dt from 'datatables.net';
import 'bootstrap';




export default class indexPA extends Component {

    state = {
      Despesa: [], //dados da tabela
      DespesaInfo: {},  //informações necessarias para paginação e apresentação dos dados
        page: 1   ,        //pagina inicial
        
    };
    componentDidMount() { // metodo executa automatico quando inicia a aplicação
        this.loadDespesa();
    }

    loadDespesa = async (page = 1) => {
        const response = await api.get(`/Despesa?page=${page}`); //buscar dos dados no banco
        const { docs, ...DespesaInfo } = response.data; //armazenando lista do banco em um documento
        this.setState({Despesa: docs,DespesaInfo, page }); // setando o estado de Pu.At. com informações da lista do banco 
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadVoDespesa(pageNumber);
    }
    nexPage = () => {
        const { page,DespesaInfo } = this.state;
        if (page ===DespesaInfo.pages) return;

        const pageNumber = page + 1;
        this.loadDespesa(pageNumber);
    }   
    


    render() {
        const {Despesa,DespesaInfo, page } = this.state; // definir variaveis em seu estado atual, carregadas com a lista


        
        return (

            <div id="tab" className="list">
                <table id="table"   className="table table-striped diplay">
                    <thead>
                        <tr className="bg-success">
                            <th>Despesa</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Deleta</th>
                        </tr>
                    </thead>

                    <tbody>
                            { this.state.Despesa.map(Despesa=> ( 
                               
                                <tr key={Despesa._id} >
                                    <td>{Despesa.despesa}</td>
                                    <td>{Despesa.valor}</td>
                                     <td><Moment format="DD/MM/YYYY">{Despesa.data}</Moment></td>

                                    <td> <Link to={`/page23/${Despesa._id}`}>Acessar</Link></td>
                                    {ta()}
                                    </tr>
                                   
                            ))}
                            

                    </tbody>
                    
                </table>

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button className="waves-effect waves-light" disabled={page ===DespesaInfo.page} onClick={this.nexPage}>Proximo</button>
                </div>
            </div>



        );
        
    }

}

function ta(){
    $(document).ready(function() {
       $('#table').DataTable();
       $("a:contains(Next)").attr('id', 'btn');

       //$("a:contains(Previous)").addClass('btn btn-primary');
    });
}


*/