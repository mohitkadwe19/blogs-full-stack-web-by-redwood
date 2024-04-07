import { render } from '@redwoodjs/testing/web'

import RoleManagementPage from './RoleManagementPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RoleManagementPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoleManagementPage />)
    }).not.toThrow()
  })
})
