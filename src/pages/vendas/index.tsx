import { MagnifyingGlass, Plus } from "phosphor-react";
import { FormRegister } from "../../components/Forms";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { FormatCnpj, FormatTel } from "../../utils/format";

function VendasLista() {
  return (
    <>
      <div className="flex">
        <h1
          className="
            text-gray-600 text-4xl font-bold border-b-4
            border-blue-800 
              pb-1
              w-full max-w-[310px]
            "
        >
          Lista de Vendas
        </h1>
      </div>

      <div
        className="
            flex gap-4 flex-col 

            my-10 
            
            sm:flex-row
            "
      >
        <div
          className="
              flex flex-1

              text-xl

              border-gray-400 border-[1px] rounded

              p-0
              "
        >
          <input
            className="flex-1 p-3"
            type="text"
            placeholder="Digite o nome do cliente que deseja pesquisar"
          />
          <button className="text-white bg-blue-800 p-3 rounded">
            <MagnifyingGlass size={28} weight="bold" />
          </button>
        </div>

        <Modal icon={<Plus size={20} weight="bold" />} title="Cadastrar vendas">
          <div>
            <FormRegister />
          </div>
        </Modal>
      </div>
      <Table
        data={{
          rows: [
            {
              id: 1,
              name: "Juan Pablo Farias",
              data: Date.now(),
              status: 2,
              valor: 350,
            },
            {
              id: 2,
              name: "Restaurante seu mineiro",
              data: Date.now(),
              status: 3,
              valor: 12.9,
            },
          ],
          columns: [
            { field: "name", headerName: "Nome", flex: 2, minWidth: 200 },
            {
              field: "data",
              headerName: "Data",
              flex: 1,
              minWidth: 200,
            },
            {
              field: "status",
              headerName: "Status",
              flex: 1,
              minWidth: 200,
              valueFormatter: ({ value }) => FormatTel(String(value)),
            },
            {
              field: "valor",
              headerName: "Telefone",
              flex: 1,
              minWidth: 200,
              valueFormatter: ({ value }) => FormatTel(String(value)),
            },
            {
              field: "",
              headerName: "Ações",
              width: 150,
              sortable: false,
              filterable: false,
              disableExport: true,
            },
          ],
        }}
      />
    </>
  );
}

export { VendasLista };
