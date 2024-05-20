import type { Meta, StoryObj } from '@storybook/react';
import { Renderer } from '../types/index.js';
import { ReactBarcode } from './react-barcode.js';

const meta = {
  title: 'ReactBarcode',
  component: ReactBarcode,
  tags: ['autodocs'],
} satisfies Meta<typeof ReactBarcode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'ABC10002',
  },
};

export const Image: Story = {
  args: {
    value: 'ABC10002',
    renderer:Renderer.IMAGE
  },
};

export const Canvas: Story = {
  args: {
    value: 'ABC10002',
    renderer:Renderer.CANVAS
  },
};

export const UsingOptions: Story = {
  args: {
    value: 'ABC10002',
    options: {
      textAlign:'right'
    }
  },
};

