import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Broken: Story = {
  args: {
    src: 'https://broken',
    size: 'md',
  },
}

export const Example: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/97165289',
    size: 'md',
  },
}
