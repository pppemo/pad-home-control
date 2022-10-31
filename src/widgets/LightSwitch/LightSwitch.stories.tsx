import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LightSwitch } from './LightSwitch';
import { tileCanvasDecorator } from '../../../.storybook/decorators';

export default {
  title: 'Widgets/Light Switch',
  component: LightSwitch,
  decorators: [tileCanvasDecorator],
} as ComponentMeta<typeof LightSwitch>;

const Template: ComponentStory<typeof LightSwitch> = args => (
  <LightSwitch {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  label: 'Button',
  isOn: false,
};
