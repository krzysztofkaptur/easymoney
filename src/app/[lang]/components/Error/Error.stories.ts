import type { Meta, StoryObj } from '@storybook/react'
import { Error } from './Error'

const meta = {
  title: 'Components/Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    error: 'test kek',
  },
}
