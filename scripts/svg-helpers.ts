type SVGNode = {
  type: string;
  tagName: string;
  properties: Record<string, string | number>;
  children: SVGNode[];
  [key: string]: unknown;
};

const recursiveFilter = (
  data: SVGNode[],
  compare: (item: SVGNode) => boolean
): SVGNode[] => {
  const found = data.filter(compare);
  const others = data.reduce(
    (acc, item) =>
      item.children
        ? [...acc, ...recursiveFilter(item.children, compare)]
        : acc,
    [] as any[]
  );

  return [...found, ...others];
};

const excludesTags = (data: SVGNode, tags: string[]) =>
  tags.every((tag) => data.tagName && data.tagName !== tag);
// const includes = (data: SVGNode, tags: string[]) => tags.some( tag => data.tagName === tag);

export const getChildContent = (obj: SVGNode) =>
  recursiveFilter(obj.children, (data) =>
    excludesTags(data, ["svg", "title", "desc", "metadata"])
  );

export const getViewBox = (obj: SVGNode) =>
  obj.children.find((data) => data.tagName === "svg")?.properties?.viewBox;

export const getPath = (obj: SVGNode) =>
  recursiveFilter(obj.children, (data) => data.tagName === "path")?.[0]
    ?.properties.d;

export const createTag = (
  tagName: string,
  properties: Record<string, number | string>
) => {
  const stringProps = Object.entries(properties).reduce((acc, [key, value]) => {
    return acc + ` ${key}='${value}'`;
  }, "");
  return `<${tagName} ${stringProps}/>`;
};
