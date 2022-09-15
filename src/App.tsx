import { DataGrid, GridColDef,GridValueGetterParams } from "@mui/x-data-grid"



const columns: GridColDef[] = [
  {field: 'name', headerName: 'Nome', width: 70},
  {field: 'date', headerName: 'Data', width: 130},
  {field: 'description', headerName: 'Descrição', width: 130},
  {field: 'excluir', headerName: 'Editar/Excluir', width: 90},
 
]

const rows = [
 

]

const columns2: GridColDef[] = [
    {field: 'name', headerName: 'Nome', width: 70},
    {field: 'aniver', headerName: 'Aniver', width: 130},
    {field: 'funcçao', headerName: 'Funcção', width: 130},
    {field: 'email', headerName: 'E-mail', width: 90},
    
  ]
  
  const rows2 = [
   
  ]

  const columns3: GridColDef[] = [
    {field: 'data', headerName: 'Data', width: 70},
    {field: 'cargo', headerName: 'Cargo', width: 130},
    {field: 'selec', headerName: 'Selec', width: 130},
    {field: 'encam', headerName: 'Encam', width: 90},
    {field: 'contrat', headerName: 'Contrat', width: 90},
    
  ]

  const rows3 = [
   
  ]


export default function app() {
  return (
    <div style={{height: 400, width: '800px', margin: 'auto'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />

<DataGrid
        rows={rows2}
        columns={columns2}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />



<DataGrid
        rows={rows3}
        columns={columns3}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        />
    </div>

  )
}