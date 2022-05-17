/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Validator from "yup";
import { ObjectShape } from "yup/lib/object";
import { AnyObject, Maybe } from "yup/lib/types";

/* https://github.com/jquense/yup/blob/master/src/util/printValue.js */

/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
/* eslint-disable no-shadow */

const { toString } = Object.prototype;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString =
  typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";

const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;

function printNumber(val: any): string {
  if (val !== +val) return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : `${val}`;
}

function printSimpleValue(val: any, quoteStrings = false): string | null {
  if (val == null || val === true || val === false) return `${val}`;

  const typeOf = typeof val;
  if (typeOf === "number") return printNumber(val);
  if (typeOf === "string") return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function") {
    return `[Function ${val.name || "anonymous"}]`;
  }
  if (typeOf === "symbol") {
    return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  }

  const tag = toString.call(val).slice(8, -1);
  if (tag === "Date") {
    return isNaN(val.getTime()) ? `${val}` : val.toISOString(val);
  }
  if (tag === "Error" || val instanceof Error) {
    return `[${errorToString.call(val)}]`;
  }
  if (tag === "RegExp") return regExpToString.call(val);

  return null;
}

function printValue(value: any, quoteStrings: boolean): string {
  const result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;

  return JSON.stringify(
    value,
    function (k: string, v: any) {
      const r = printSimpleValue(this[k], quoteStrings);
      if (r !== null) return r;
      return v;
    },
    2
  );
}

const mixedLocales = {
  default: "${path} é inválido",
  required: "Campo obrigatório",
  oneOf: "${path} deve ter um dos seguintes valores: ${values}",
  notOneOf: "${path} não deve ter nenhum dos seguintes valores: ${values}",
  notType: ({ path, type, value, originalValue }: any) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg = `${
      `${path} deve ser do tipo \`${type}\`, ` +
      `mas o valor final é: \`${printValue(value, true)}\``
    }${
      isCast ? ` (cast do valor \`${printValue(originalValue, true)}\`)` : ""
    }`;

    if (value === null) {
      msg +=
        '\nse a intenção era usar "null" como um valor em branco marque o esquema como `.nullable()`';
    }

    return msg;
  },
  defined: "${path} não deve ser indefinido",
};

const stringLocales = {
  length: ({ path, length }: any) =>
    `${path} deve ter exatamente ${length} ${
      length === 1 ? "caractere" : "caracteres"
    }`,
  min: ({ path, min }: any) =>
    `${path} deve ter pelo menos ${min} ${
      min === 1 ? "caractere" : "caracteres"
    }`,
  max: ({ path, max }: any) =>
    `${path} deve ter no máximo ${max} ${
      max === 1 ? "caractere" : "caracteres"
    }`,
  matches: '${path} deve corresponder ao padrão: "${regex}"',
  email: "Insira um e-mail válido",
  url: "${path} deve ser uma URL válida",
  trim: "${path} não deve conter espaços adicionais no início nem no fim",
  lowercase: "${path} deve estar em letras minúsculas",
  uppercase: "${path} deve estar em letras maiúsculas",
};

const numberLocales = {
  min: "O valor deve ser maior ou igual a ${min}",
  max: "O valor deve ser menor ou igual a ${max}",
  lessThan: "O valor deve ser menor que ${less}",
  moreThan: "O valor deve ser maior que ${more}",
  notEqual: "O valor não deve ser igual a ${notEqual}",
  positive: "O valor deve ser um número positivo",
  negative: "O valor deve ser um número negativo",
  integer: "O valor deve ser um número inteiro",
};

const dateLocales = {
  min: "${path} deve ser posterior a ${min}",
  max: "${path} deve ser anterior a ${max}",
};

const booleanLocales = {};

const objectLocales = {
  noUnknown: "${path} tem chaves desconhecidas: ${unknown}",
};

const arrayLocales = {
  min: ({ path, min }: any) =>
    `${path} deve ter pelo menos ${min} ${min === 1 ? "item" : "itens"}`,
  max: ({ path, max }: any) =>
    `${path} deve ter no máximo ${max} ${max === 1 ? "item" : "itens"}`,
};

Validator.setLocale({
  mixed: mixedLocales,
  string: stringLocales,
  number: numberLocales,
  date: dateLocales,
  object: objectLocales,
  array: arrayLocales,
  boolean: booleanLocales,
});

export default Validator;
