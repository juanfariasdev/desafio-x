import { ReactElement } from "react";
import { Header } from "../../components/header";

interface IProps {
  children: ReactElement;
}

function Dashboard({ children }: IProps) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1">
        <div className="flex flex-1 justify-center h-full">
          <div className="w-[1720px] p-6 pt-16 flex flex-col">{children}</div>
        </div>
      </main>
    </div>
  );
}

export { Dashboard };
