import { ReactElement } from "react";
import { Header } from "../../components/header";

interface IProps {
  children: ReactElement;
}

function Dashboard({ children }: IProps) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export { Dashboard };
