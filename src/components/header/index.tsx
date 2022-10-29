import { UserCircle, SignOut } from "phosphor-react";
import { ReactElement, useState } from "react";
import { LateralMenu } from "./menu";

type itens = {
  title: string;
  link: string;
};

interface IMenu {
  title: string;
  itens: itens[];
}

function Header() {
  const [menu, setMenu] = useState(false);
  const menus: IMenu[] = [
    {
      title: "Gestão de Clientes",
      itens: [
        {
          title: "Lista de clientes",
          link: "/lista/clientes",
        },
        {
          title: "Cadastrar cliente",
          link: "/lista/clientes/cadastrar",
        },
      ],
    },
    {
      title: "Gestão de Vendas",
      itens: [
        {
          title: "Lista de vendas",
          link: "/lista/vendas",
        },
        {
          title: "Cadastrar vendas",
          link: "/lista/vendas/cadastrar",
        },
      ],
    },
    {
      title: "Relatórios",
      itens: [
        {
          title: "ver Relatórios",
          link: "/lista/relatorio",
        },
      ],
    },
  ];
  return (
    <>
      <header
        className="
        flex items-center justify-between

        bg-blue-800 
        text-white 

        border-b-[1px] border-gray-500

        p-7
        z-50
    "
      >
        <div className="max-w-[58px]">
          <button title="menu" onClick={() => setMenu(!menu)}>
            <img src="/logo.png" alt="Logo da YouX Group" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <UserCircle size={46} weight="fill" className="text-white" />
            <div>
              <h3 className="text-2xl">Juan Pablo Farias</h3>
              <h4 className="text-xl font-light">Desenvolvedor</h4>
            </div>
          </div>
          <div>
            <button
              className="
              flex items-center justify-center

              p-2
              
              transition-all 
              hover:bg-slate-500 hover:rounded-full
              "
              title="Deslogar"
            >
              <SignOut size={46} weight="fill" />
            </button>
          </div>
        </div>
      </header>
      <LateralMenu open={menu} menus={menus} />
    </>
  );
}

export { Header };
