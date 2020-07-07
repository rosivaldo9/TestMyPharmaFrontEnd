import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = (props) => {

  const data = {
    columns: [
     
  
      {
        label: 'Nome',
        field: 'nome',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Detalhes',
        field: 'detalhes',
        sort: 'asc',
        width: 270
      },
 
    ],
    rows: props.row

  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
      hover
       entriesOptions={[5, 20, 25]} 
      entries={5} 
      pagesAmount={4}
      
    />
  );
}


export default DatatablePage