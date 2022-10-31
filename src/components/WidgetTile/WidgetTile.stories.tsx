import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WidgetTile } from './WidgetTile';
import { LightSwitch } from './../../widgets/LightSwitch/LightSwitch';
import { tileCanvasDecorator } from './../../../.storybook/decorators';

export default {
  title: 'Widget Tile',
  component: WidgetTile,
  decorators: [tileCanvasDecorator],
} as ComponentMeta<typeof WidgetTile>;

const Template: ComponentStory<typeof WidgetTile> = args => (
  <WidgetTile {...args}>
    <LightSwitch isOn label="Bedroom" />
  </WidgetTile>
);

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
  isConfigOpen: false,
};
