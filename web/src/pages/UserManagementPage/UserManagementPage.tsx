import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const UserManagementPage = () => {
  return (
    <>
      <Metadata title="UserManagement" description="UserManagement page" />

      <h1>UserManagementPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/UserManagementPage/UserManagementPage.tsx</code>
      </p>
      <p>
        My default route is named <code>userManagement</code>, link to me with `
        <Link to={routes.userManagement()}>UserManagement</Link>`
      </p>
    </>
  )
}

export default UserManagementPage
