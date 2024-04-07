import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RoleManagementPage = () => {
  return (
    <>
      <Metadata title="RoleManagement" description="RoleManagement page" />

      <h1>RoleManagementPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/RoleManagementPage/RoleManagementPage.tsx</code>
      </p>
      <p>
        My default route is named <code>roleManagement</code>, link to me with `
        <Link to={routes.roleManagement()}>RoleManagement</Link>`
      </p>
    </>
  )
}

export default RoleManagementPage
