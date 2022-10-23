import { UserCircle, SignOut } from "phosphor-react";
function Header() {
  return (
    <header
      className="
        p-7
        bg-blue-800 
        text-white 
        flex
        items-center
        justify-between
    "
    >
      <div className="max-w-[58px]">
        <button title="menu">
          <img src="/logo.png" alt="Logo da YouX Group" />
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <UserCircle size={46} weight="fill" className="text-white" />
          <div>
            <h3 className="text-2xl">Juan Pablo Farias</h3>
            <h4 className="text-xl font-light">Desenvolvedor</h4>
          </div>
        </div>
        <div>
          <button
            className="hover:bg-slate-500 hover:rounded-full transition-all p-2 flex items-center justify-center"
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
