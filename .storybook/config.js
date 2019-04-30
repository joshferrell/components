import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '../src/styles/theme';

addDecorator(withKnobs);

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {storyFn()}
    </>
  </ThemeProvider>
));

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
