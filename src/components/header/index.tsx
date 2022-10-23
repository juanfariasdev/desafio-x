import { UserCircle, SignOut } from "phosphor-react";
function Header() {
  return (
    <header
      className="
        flex items-center justify-between

        bg-blue-800 
        text-white 

        p-7
    "
    >
      <div className="max-w-[58px]">
        <button title="menu">
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
  );
}

export { Header };
