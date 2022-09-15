import { DataGrid, GridColDef,GridValueGetterParams } from "@mui/x-data-grid"



const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 70},
  {field: 'firstName', headerName: 'First Name', width: 130},
  {field: 'lastName', headerName: 'Last Name', width: 130},
  {field: 'age ', headerName: 'Age', width: 90},
  {field: 'fullName', headerName: 'Full Name', width: 160, sortable: false, 
    valueGetter: (params: GridValueGetterParams) => ${params.getValue(params.id, 'firstName') || ''} ${ 
      params.getValue(params.id, 'lastName' || '')  
    }}
]

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 2, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 3, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 4, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 5, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 6, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 7, firstName: 'John', lastName: 'Doe', age: 36},
  { id: 8, firstName: 'John', lastName: 'Doe', age: 36},

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

    </div>

  )
}