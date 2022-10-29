type itens = {
  title: string;
  link: string;
};

interface IMenu {
  title: string;
  itens: itens[];
}
interface IProps {
  open: boolean;
  menus: IMenu[];
}

function LateralMenu({ open, menus }: IProps) {
  return (
    <aside
      className={`absolute top-0 z-10 h-screen pt-[121px] transition-all ${
        !open ? "-left-72" : "left-0"
      } `}
    >
      <nav className="h-full bg-blue-800 px-10 py-10 text-white flex flex-col gap-14">
        {menus.map((menu) => (
          <div className="gap-5">
            <h3 className="text-xl uppercase mb-5">{menu.title}</h3>
            <ul className="flex flex-col gap-5">
              {menu.itens.map((iten) => (
                <li>
                  <a
                    href={iten.link}
                    className="text-xl text-light text-gray-300"
                  >
                    {iten.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export { LateralMenu };
