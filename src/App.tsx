import { MagnifyingGlass, Plus } from "phosphor-react";

import "./index.css";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="w-[1720px] p-6 pt-16 flex flex-col">
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

          <button
            className="
              flex gap-2 items-center 

            bg-blue-800 

              px-5 py-4 

            text-white text-xl rounded
          "
          >
            <Plus size={20} weight="bold" />
            Cadastrar cliente
          </button>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
