import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import { Button, chakra, ChakraProps, useClipboard } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { CopyIcon } from '../../../src';

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim();

type CodeProps = ChakraProps & {
  language?: 'html' | 'jsx' | 'js' | 'css';
  children: string;
};
export const Code = ({
  code,
  children,
  language = 'jsx',
  ...rest
}: CodeProps) => {
  const { hasCopied, onCopy } = useClipboard(children);

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <chakra.div position="relative">
          <chakra.pre
            sx={{
              rounded: 'md',
              textAlign: 'left',
              margin: '1em 0',
              paddingY: 4,
              paddingX: 7,
              overflow: 'scroll',
              '& .token-line': {
                lineHeight: '1.3em',
                height: '1.3em',
              },
            }}
            className={className}
            style={style}
            {...rest}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </chakra.pre>
          <Button
            size="sm"
            position="absolute"
            top={0}
            right={0}
            aria-label="copy import code"
            m={2}
            bgColor="gray.500"
            icon={<CopyIcon />}
            onClick={onCopy}
          >
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </chakra.div>
      )}
    </Highlight>
  );
};
