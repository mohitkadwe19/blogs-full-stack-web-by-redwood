import type { Meta, StoryObj } from '@storybook/react'

import ArticlePage from './ArticlePage'

const meta: Meta<typeof ArticlePage> = {
  component: ArticlePage,
}

export default meta

type Story = StoryObj<typeof ArticlePage>

export const Primary: Story = {}
