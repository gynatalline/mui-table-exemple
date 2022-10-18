import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "name", headerName: "Nome", width: 70 },
  { field: "date", headerName: "Data", width: 130 },
  { field: "description", headerName: "Descrição", width: 130 },
  { field: "excluir", headerName: "Editar/Excluir", width: 90 },
];

const rows = [];

const columns2: GridColDef[] = [
  { field: "name", headerName: "Nome", width: 70 },
  { field: "aniver", headerName: "Aniver", width: 130 },
  { field: "funcçao", headerName: "Funcção", width: 130 },
  { field: "email", headerName: "E-mail", width: 90 },
];

const rows2 = [];

const columns3: GridColDef[] = [
  { field: "data", headerName: "Data", width: 70 },
  { field: "cargo", headerName: "Cargo", width: 130 },
  { field: "selec", headerName: "Selec", width: 130 },
  { field: "encam", headerName: "Encam", width: 90 },
  { field: "contrat", headerName: "Contrat", width: 90 },
];

const rows3 = [];
//aba divulgadores

const columns4: GridColDef[] = [
  { field: "nome", headerName: "Nome", width: 70 },
  { field: "aniver", headerName: "Aniver", width: 130 },
  { field: "funcçao", headerName: "Funcção", width: 130 },
  { field: "email", headerName: "E-mail", width: 90 },
];

const rows4 = [];

const columns5: GridColDef[] = [
  { field: "proposta", headerName: "Prosposta", width: 70 },
  { field: "emissao", headerName: "Emissão", width: 130 },
  { field: "retorno", headerName: "Retorno", width: 130 },
  { field: "editar/deletar", headerName: "Editar/Deletar", width: 90 },
];

const rows5 = [];

const columns6: GridColDef[] = [
  { field: "contrato", headerName: "Contrato", width: 70 },
  { field: "emissao", headerName: "Emissão", width: 130 },
  { field: "retorno", headerName: "Retorno", width: 130 },
  { field: "inicio", headerName: "Inicio", width: 90 },
  { field: "descriçao", headerName: "Descrição", width: 90 },
  { field: "editar/deletar", headerName: "Editar/Deletar", width: 90 },
];

const rows6 = [];

const columns7: GridColDef[] = [
  { field: "contato", headerName: "Contato", width: 70 },
  { field: "ddd", headerName: "DDD", width: 130 },
  { field: "telefone", headerName: "Telefone", width: 130 },
  { field: "whats/sms", headerName: "Whats/SMS", width: 90 },
];

const rows7 = [];

//tabelas consulta

const columns8: GridColDef[] = [
  { field: "nome", headerName: "Nome", width: 70 },
  { field: "entrevista", headerName: "Entrevista Atualizada", width: 130 },
  { field: "bairro", headerName: "Bairro", width: 130 },
  { field: "imprimir", headerName: "Imprimir", width: 90 },
];

const rows8 = [];

const columns9: GridColDef[] = [
  { field: "cod", headerName: "Código", width: 70 },
  { field: "cliente", headerName: "cliente", width: 130 },
  { field: "cidade", headerName: "Cidade", width: 130 },
  { field: "cargo", headerName: "Cargo", width: 90 },
  { field: "cargocli", headerName: "Cargo Do Clente", width: 70 },
  { field: "data", headerName: "Data", width: 130 },
  { field: "vagas", headerName: "Vagas", width: 130 },
  { field: "selec", headerName: "Selec", width: 90 },
  { field: "standy", headerName: "Standy", width: 70 },
  { field: "enc", headerName: "Enc", width: 130 },
  { field: "contra", headerName: "Contra", width: 130 },
  { field: "web", headerName: "Web", width: 90 },
];

const rows9 = [];

const columns10: GridColDef[] = [
  { field: "nome", headerName: "Nome", width: 70 },
  { field: "cidade", headerName: "Cidade", width: 130 },
  { field: "uf", headerName: "UF", width: 130 },
  { field: "bairro", headerName: "Bairro", width: 90 },
  { field: "regional", headerName: "Regional", width: 90 },
];

const rows10 = [];

const columns11: GridColDef[] = [
  { field: "cons", headerName: "Cons", width: 70 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "fantasia", headerName: "Fantasia", width: 130 },
  { field: "cidade", headerName: "Cidade", width: 130 },
  { field: "bairro", headerName: "Bairro", width: 90 },
  { field: "func", headerName: "Func", width: 90 },
  { field: "classificaçao", headerName: "Classificação", width: 90 },
];

const rows11 = [];

const columns12: GridColDef[] = [
  { field: "codigo", headerName: "Codigo", width: 70 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "bairro", headerName: "Bairro", width: 130 },
];

const rows12 = [];

const columnsCurricullum: GridColDef[] = [
  { field: "Cliente", headerName: "Cliente", width: 70 },
  { field: "WEB", headerName: "	WEB", width: 70 },
  { field: "Cargo", headerName: "Cargo", width: 70 },
  { field: "Contato/Pré", headerName: "Contato/Pré", width: 70 },
  { field: "Entrevistado", headerName: "Entrevistado", width: 130 },
  { field: "Retorno Cliente", headerName: "Retorno Cliente", width: 130 },
];

const rowsCurricullum = [];

const columnsVagaHis: GridColDef[] = [
  { field: "candidato", headerName: "Candidato", width: 70 },
  { field: "selecionado", headerName: "Selecionado", width: 70 },
  { field: "contato", headerName: "Contato/Pré/Agenda", width: 70 },
  { field: "entrevistado", headerName: "Entrevistado", width: 70 },
  { field: "retorno", headerName: "Retorno Cliente", width: 130 },
];

const rowsVagaHis = [];

export default function app() {
  return (
    <div style={{ height: 400, width: "800px", margin: "auto" }}>
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

      <DataGrid
        rows={rows4}
        columns={columns4}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows5}
        columns={columns5}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows6}
        columns={columns6}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows7}
        columns={columns7}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows8}
        columns={columns8}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows9}
        columns={columns9}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows10}
        columns={columns10}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows11}
        columns={columns11}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rows12}
        columns={columns12}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rowsCurricullum}
        columns={columnsCurricullum}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <DataGrid
        rows={rowsVagaHis}
        columns={columnsVagaHis}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
