import { MagnifyingGlass, Plus } from "phosphor-react";
import { FormRegister } from "../../components/Forms";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { FormatCnpj, FormatTel } from "../../utils/format";

function ClienteLista() {
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
          Lista de Clientes
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
            placeholder="Digite o nome ou CNPJ do cliente que deseja pesquisar"
          />
          <button className="text-white bg-blue-800 p-3 rounded">
            <MagnifyingGlass size={28} weight="bold" />
          </button>
        </div>

        <Modal
          icon={<Plus size={20} weight="bold" />}
          title="Cadastrar cliente"
        >
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
              cnpj: "61626470000150",
              email: "juanpablo.p.a.f@gmail.com",
              tel: "35984228193",
            },
            {
              id: 2,
              name: "Pedro Lucas",
              cnpj: "09567412000182",
              email: "pedraolucas@gmail.com",
              tel: "35984228193",
            },
            {
              id: 3,
              name: "Jorge Matheus",
              cnpj: "04917772000143",
              email: "jorgematheus@gmail.com",
              tel: "35984228193",
            },
          ],
          columns: [
            { field: "name", headerName: "Nome", flex: 2, minWidth: 200 },
            {
              field: "cnpj",
              headerName: "CNPJ",
              flex: 1,
              minWidth: 200,
              valueFormatter: ({ value }) => FormatCnpj(String(value)),
            },
            { field: "email", headerName: "E-mail", flex: 1, minWidth: 200 },
            {
              field: "tel",
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

export { ClienteLista };
