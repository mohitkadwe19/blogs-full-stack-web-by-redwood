import type { Meta, StoryObj } from '@storybook/react'

import UserManagementPage from './UserManagementPage'

const meta: Meta<typeof UserManagementPage> = {
  component: UserManagementPage,
}

export default meta

type Story = StoryObj<typeof UserManagementPage>

export const Primary: Story = {}
