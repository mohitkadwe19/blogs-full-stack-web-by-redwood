import { render } from '@redwoodjs/testing/web'

import UserManagementPage from './UserManagementPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserManagementPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserManagementPage />)
    }).not.toThrow()
  })
})
