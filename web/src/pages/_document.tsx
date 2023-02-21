import PageHeader from '@/components/page-header/page-header';
import { Html, Head, Main, NextScript } from 'next/document';
import { globalCss, getCssText } from 'stitches.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    lineHeight: 'calc(1em + 0.5rem)',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  },
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
  },
  p: {
    overflowWrap: 'break-word',
  },
  h1: {
    overflowWrap: 'break-word',
  },
  h2: {
    overflowWrap: 'break-word',
  },
  h3: {
    overflowWrap: 'break-word',
  },
  h4: {
    overflowWrap: 'break-word',
  },
  h5: {
    overflowWrap: 'break-word',
  },
  h6: {
    overflowWrap: 'break-word',
  },
  '#root': {
    isolation: 'isolate',
  },
  '#__next': {
    isolation: 'isolate',
  },
});

export default function Document() {
  globalStyles();

  return (
    <Html lang='en'>
      <Head>
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <PageHeader />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
