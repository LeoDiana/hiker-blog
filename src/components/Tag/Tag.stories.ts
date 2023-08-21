import type { Meta, StoryObj } from '@storybook/react'

import Tag from './Tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Background color will change based on characters',
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof Tag>

export const Example: Story = {
  args: {
    children: 'Text',
  },
}
