import type { Meta, StoryObj } from '@storybook/react';
import { Signum } from './signum';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Signum> = {
  component: Signum,
  title: 'Signum',
};
export default meta;
type Story = StoryObj<typeof Signum>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Signum!/gi)).toBeTruthy();
  },
};
