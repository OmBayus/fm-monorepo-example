import type { Meta, StoryObj } from '@storybook/react';
import { Button2 } from './button2';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button2> = {
  component: Button2,
  title: 'Button2',
};
export default meta;
type Story = StoryObj<typeof Button2>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Button2!/gi)).toBeTruthy();
  },
};
