import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    disabled: false,
    size: 'md',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}
