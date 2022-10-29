import { format } from "date-fns";

function filterCharacter(value: string) {
  let str = value;
  str = str.replace(/[ÀÁÂÃÄÅ]/g, "A");
  str = str.replace(/[àáâãäå]/g, "a");
  str = str.replace(/[ÈÉÊË]/g, "E");
  str = str.replace(/[^a-z0-9]/gi, "");
  return str;
}

function FormatCnpj(value: string) {
  let formatedCharacter = filterCharacter(value);

  if (formatedCharacter.length != 14) {
    return value;
  }

  formatedCharacter = formatedCharacter.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    "$1.$2.$3/$4-$5"
  );

  return formatedCharacter;
}

function FormatDate(value: Date | string) {
  const date = format(new Date(value), "dd/mm/yyyy");
  return date;
}

function FormatTel(value: string) {
  const formatedCharacter = filterCharacter(value);

  switch (formatedCharacter.length) {
    case 11:
      return formatedCharacter.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    case 10:
      return formatedCharacter.replace(/^(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    case 8:
      return formatedCharacter.replace(/^(\d{4})(\d{4})/, "$2-$3");
    default:
      return value;
  }
}

function FormatStatus(value: number) {
  switch (value) {
    case 0:
      return "Aguardando pagamento";
    case 1:
      return "Pagamento aprovado";
    case 2:
      return "Aguardando envio";
    case 3:
      return "À caminho";
    case 4:
      return "Finalizado";
    default:
      return "Indefinido";
  }
}

export { FormatCnpj, FormatTel, FormatDate, FormatStatus };
