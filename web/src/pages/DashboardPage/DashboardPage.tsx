import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const DashboardPage = () => {
  return (
    <>
      <Metadata title="Dashboard" description="Dashboard page" />

      <h1>DashboardPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardPage/DashboardPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dashboard</code>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
    </>
  )
}

export default DashboardPage
