type CaseType =
  | "camelCase"
  | "snake_case"
  | "PascalCase"
  | "kebab-case"
  | "Sentence case"
  | "Title Case";

const inputSperatorMap: { [key in CaseType]: string | RegExp } = {
  camelCase: /(?=[A-Z])/,
  PascalCase: /(?=[A-Z])/,
  snake_case: "_",
  "kebab-case": "-",
  "Sentence case": " ",
  "Title Case": " ",
};

const outputSperatorMap: { [key in CaseType]: string } = {
  camelCase: "",
  PascalCase: "",
  snake_case: "_",
  "kebab-case": "-",
  "Sentence case": " ",
  "Title Case": " ",
};

const isInitialCharUpper = (caseType: CaseType) => {
  switch (caseType) {
    case "PascalCase":
    case "Title Case":
    case "Sentence case":
      return true;
    case "camelCase":
    case "kebab-case":
    case "snake_case":
      return false;
  }
};

const isOtherInitialCharUpper = (caseType: CaseType) => {
  switch (caseType) {
    case "PascalCase":
    case "camelCase":
    case "Title Case":
      return true;
    case "kebab-case":
    case "snake_case":
    case "Sentence case":
      return false;
  }
};

type ChangeCaseOptions = {
  input?: CaseType;
  output?: CaseType;
  uppercase?: boolean;
};

/**
 * Changes the case formatting of the input.
 * @param input The string to change the case to
 * @param options.input The case formatting of the input
 * @param options.output The case formatting you want the output to be
 */
export const changeCase = (input: string, options?: ChangeCaseOptions) => {
  const defaultOptions = {
    input: "snake_case",
    output: "camelCase",
    uppercase: false,
  } as const;

  const parts = input.split(
    inputSperatorMap[options?.input ?? defaultOptions.input]
  );

  return parts.reduce((acc, part, index) => {
    let value = acc;

    //initial char
    if (index === 0) {
      value += isInitialCharUpper(options?.output ?? defaultOptions.output)
        ? part.charAt(0).toUpperCase()
        : part.charAt(0).toLowerCase();
    } else {
      value += isOtherInitialCharUpper(options?.output ?? defaultOptions.output)
        ? part.charAt(0).toUpperCase()
        : part.charAt(0).toLowerCase();
    }

    // rest word
    value += !(options?.uppercase ?? defaultOptions.uppercase)
      ? part.slice(1).toLowerCase()
      : part.slice(1).toUpperCase();

    // output sperator
    if (index !== parts.length - 1) {
      value += outputSperatorMap[options?.output ?? defaultOptions.output];
    }

    return value;
  }, "");
};

type GenericObject = { [key: string]: unknown };

/**
 * This takes an object and recursively changes all keys to be the case.
 * @param obj Any type of object
 * @param separator How the object keys are seperated
 */
export const changeKeyCase = (
  obj: GenericObject,
  options?: ChangeCaseOptions & { skipObjectKeysInArrays?: boolean }
): any => {
  const defaultOptions = {
    skipObjectKeysInArrays: false,
  } as const;

  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj))
    return obj.map((item) => changeKeyCase(item, options));

  const newObj: GenericObject = {};

  for (const i in obj) {
    if (!obj.hasOwnProperty(i)) continue;

    if (!!obj[i] && typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      newObj[changeCase(i, options)] = changeKeyCase(
        obj[i] as GenericObject,
        options
      );
    } else if (
      !(
        options?.skipObjectKeysInArrays ?? defaultOptions.skipObjectKeysInArrays
      ) &&
      Array.isArray(obj[i])
    ) {
      newObj[changeCase(i, options)] = (obj[i] as unknown[]).map((item: any) =>
        changeKeyCase(item, options)
      );
    } else {
      newObj[changeCase(i, options)] = obj[i];
    }
  }

  return newObj;
};
