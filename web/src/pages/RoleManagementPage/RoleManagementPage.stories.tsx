import type { Meta, StoryObj } from '@storybook/react'

import RoleManagementPage from './RoleManagementPage'

const meta: Meta<typeof RoleManagementPage> = {
  component: RoleManagementPage,
}

export default meta

type Story = StoryObj<typeof RoleManagementPage>

export const Primary: Story = {}
