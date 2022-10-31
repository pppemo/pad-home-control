import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WidgetTile } from './WidgetTile';
import { tileCanvasDecorator } from './../../../.storybook/decorators';

export default {
  title: 'Widget Tile',
  component: WidgetTile,
  decorators: [tileCanvasDecorator],
} as ComponentMeta<typeof WidgetTile>;

const Template: ComponentStory<typeof WidgetTile> = args => (
  <WidgetTile {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
  isConfigOpen: false,
};
