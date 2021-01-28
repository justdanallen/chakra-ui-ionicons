// The definitely typed package for this module was not helpful...
declare module 'svg-parser' {
  type SVGNode = {
    type: string;
    tagName: string;
    properties: Record<string, string | number>;
    children: SVGNode[];
    [key: string]: unknown;
  };

  function parse(input: string): SVGNode;
}
