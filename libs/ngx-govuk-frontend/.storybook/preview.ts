import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import * as docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  //👇 Enable auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;
