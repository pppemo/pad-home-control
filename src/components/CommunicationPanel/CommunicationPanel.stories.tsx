import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommunicationPanel } from './CommunicationPanel';

export default {
  title: 'Communication panel',
  component: CommunicationPanel,
} as ComponentMeta<typeof CommunicationPanel>;

const Template: ComponentStory<typeof CommunicationPanel> = args => (
  <CommunicationPanel {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  title: 'Communication Panel',
  children: 'Hey! This is the actual message of the container!',
};
