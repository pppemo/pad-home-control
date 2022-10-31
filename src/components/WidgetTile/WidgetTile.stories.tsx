import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WidgetTile } from './WidgetTile';

export default {
  title: 'Widget Tile',
  component: WidgetTile,
  decorators: [
    Story => (
      <div style={{ width: '30vh', height: '30vh' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof WidgetTile>;

const Template: ComponentStory<typeof WidgetTile> = args => (
  <WidgetTile {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: 'Button',
  isConfigOpen: false,
};
