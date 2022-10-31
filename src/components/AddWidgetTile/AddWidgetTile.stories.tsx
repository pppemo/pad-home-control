import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddWidgetTile } from './AddWidgetTile';
import { tileCanvasDecorator } from './../../../.storybook/decorators';

export default {
  title: 'Add Widget Tile',
  component: AddWidgetTile,
  decorators: [tileCanvasDecorator],
} as ComponentMeta<typeof AddWidgetTile>;

const Template: ComponentStory<typeof AddWidgetTile> = args => (
  <AddWidgetTile {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
