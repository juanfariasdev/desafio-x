import { Formik, Form } from "formik";
import { object, string } from "yup";
import { TextField } from "./TextField";

function FormRegister() {
  const validate = object({
    name: string().required("Digite o nome"),
    cnpj: string().min(14, "CNPJ inválido").required("Digite o CNPJ"),
    tel: string().required("Digite o telefone"),
    email: string().email("Email inválido").required("Digite o email"),
  });
  return (
    <Formik
      initialValues={{
        name: "",
        cnpj: "",
        tel: "",
        email: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form>
          <div className="flex flex-col gap-6">
            <TextField label="Nome" name="name" type="text" />
            <div className="flex gap-6">
              <TextField label="CNPJ" name="cnpj" type="text" />
              <TextField label="Telefone" name="tel" type="text" />
            </div>
            <div className="flex gap-6">
              <TextField label="UF" name="uf" type="text" />
              <TextField label="E-mail" name="email" type="text" />
            </div>
          </div>
          <button
            className="w-full text-xl py-3 bg-blue-800 hover:bg-blue-900  rounded text-white font-bold mt-6 disabled:bg-gray-400 hover:disabled:bg-gray-400 hover:disabled:dark:bg-gray-400"
            type="submit"
            title={
              !(formik.isValid && formik.dirty)
                ? "Preencha o formulário"
                : "Cadastrar"
            }
            disabled={!(formik.isValid && formik.dirty)}
          >
            Cadastrar
          </button>
        </Form>
      )}
    </Formik>
  );
}

export { FormRegister };
