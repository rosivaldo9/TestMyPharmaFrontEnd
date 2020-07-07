


import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css'

//import dos componentes do produto
import EditarProduto from '../Produto/updatProduto/updatProduto';
import DeletarProduto from '../Produto/deleteProduto/deleteProduto';
import DetailsProduto from '../Produto/detailsProduto/detailsProduto';
import ListaProduto from '../Produto/indexProduto/indexProduto';
import InsertProduto from '../Produto/insertProduto/insertProduto';
//import dos componente de categoria
import EditCategoria from '../Categoria/updatCategoria/updatCategoria';
import DeleteCategoria from '../Categoria/deleteCategoria/deleteCategoria';
import DetailsCategoria from '../Categoria/detailsCategoria/detailsCategoria';
import Categoria from '../Categoria/insertCategoria/insertCategoria';
import ListaCategoria from '../Categoria/indexCategoria/indexCategoria';
//import dos componentes Marca
import DeletarMarca from '../Marca/deleteMarca/deleteMarca';
import EditarMarca from '../Marca/updatMarca/updatMarca';
import DetailsMarca from '../Marca/detailsMarca/detailsMarca';
import ListaMarca from '../Marca/indexMarca/indexMarca';
import CadastrarMarca from '../Marca/insertMarca/insertMarca';


export default class SideBar extends Component {

  render() {
    return (

      <div className="container-fluid configSidbar">
      <Router>
        <div className="row">
          <div className="col-xl-2 butaoSidbar">
             <Link to="/listaProduto"><a href="#" className="list-group-item list-group-item-action configButao">Lista Produto</a></Link>
             <Link to="/insertProduto"><a href="#" className="list-group-item list-group-item-action configButao">Produto</a></Link>
             <Link to="/categoria"><a href="#" className="list-group-item list-group-item-action configButao aa">Categoria</a></Link>
             <Link to="/listaCategoria"><a href="#" className="list-group-item list-group-item-action configButao ">Lista de Categoria</a></Link>
             <Link to="/cadastraMarca"><a href="#" className="list-group-item list-group-item-action configButao">Cadastrar Marca</a></Link>
             <Link to="/listaMarca"><a href="#" className="list-group-item list-group-item-action configButao">Lista de marca</a></Link>

            </div>
          <div className="col-xl-10 main">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="container-fluid">

                  <Switch>
                     
                        {/*Componente dar Marca*/}
                        <Route  path="/cadastraMarca" component={CadastrarMarca} />
                        <Route  path="/listaMarca" component={ListaMarca} />
                        <Route  path="/page28/:id" component={DetailsMarca} />
                        <Route  path="/page24/:id" component={EditarMarca} />
                        <Route  path="/page25/:id" component={DeletarMarca} />

                        {/*Componente da Categoria*/}
                        <Route  path="/categoria" component={Categoria} />
                        <Route  path="/listaCategoria" component={ListaCategoria} />
                        <Route  path="/detalhesCategoria/:id" component={DetailsCategoria} />
                        <Route  path="/editCategoria/:id" component={EditCategoria} />
                        <Route  path="/deleteCategoria/:id" component={DeleteCategoria} />

                        {/*Componente do Produto*/}
                        <Route  path="/insertProduto" component={InsertProduto} />
                        <Route  path="/listaProduto" component={ListaProduto} />
                        <Route  path="/detailsProduto/:id" component={DetailsProduto} />
                        <Route  path="/editProduto/:id" component={EditarProduto} />
                        <Route  path="/deleteProduto/:id" component={DeletarProduto} />

                    </Switch>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Router>
    </div>
    );
  }
}



