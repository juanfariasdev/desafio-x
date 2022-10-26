import { ErrorMessage, FieldHookConfig, useField } from "formik";

interface IProps {
  label: string;
}

function TextField({ label, ...props }: IProps & any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const proo: FieldHookConfig<string> = props;
  const [field, meta] = useField(proo);

  return (
    <div className="flex-1">
      <div className={`${meta.touched && meta.error ? "border-red-500" : ""}`}>
        <label
          htmlFor={field.name}
          className={`text-xl font-light ${
            meta.touched && meta.error ? "text-red-500" : ""
          }`}
        >
          {label}
        </label>
        <input
          className="border border-gray-200 border-1 rounded text-xl font-light appearance-none w-full p-3 leading-tight focus:outline-none focus:border-blue-800 block text-gray-900 focus:ring-0 peer"
          autoComplete="off"
          placeholder=" "
          {...props}
          {...field}
        />
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className="ml-2 mt-2 font-light text-red-500 text-xl"
      />
    </div>
  );
}

export { TextField };
