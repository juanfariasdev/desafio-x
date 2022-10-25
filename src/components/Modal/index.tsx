import { X } from "phosphor-react";
import { ReactElement, useState } from "react";

interface IProps {
  icon: ReactElement;
  title: string;
  children: ReactElement;
}

function Modal({ icon, title, children }: IProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="
        flex gap-2 items-center 

      bg-blue-800 

        px-5 py-4 

      text-white text-xl rounded
    "
        type="button"
        data-modal-toggle="defaultModal"
        onClick={() => {
          setOpen(true);
        }}
      >
        {icon}
        {title}
      </button>
      {open && (
        <div
          id="defaultModal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full flex justify-center items-center"
        >
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-center p-2 pl-4 rounded-t border-b bg-blue-800">
                <h3 className="text-xl text-white">{title}</h3>
                <button
                  type="button"
                  className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center transition-all"
                  data-modal-toggle="defaultModal"
                  title="fechar modal"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <X size={20} weight="bold" />
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Modal };
