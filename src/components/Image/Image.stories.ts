import type { Meta, StoryObj } from '@storybook/react'
import tw from 'twin.macro'

import Image from './Image'

const meta = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    customStyles: { description: 'Define styles using tw``' },
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    src: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
  },
}

export const Broken: Story = {
  args: {
    src: 'https://broken',
    customStyles: tw`w-20 h-20`,
  },
}

export const WithCustomStyles: Story = {
  args: {
    src: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
    customStyles: tw`w-20 h-20 rounded-2xl`,
  },
}
