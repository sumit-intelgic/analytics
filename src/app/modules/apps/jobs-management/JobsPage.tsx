import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './users-list/JobsList'
import { AuthUsersListWrapper } from './users-list/userList'

const jobsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Jobs Management',
    path: '/apps/job-management/jobs',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Notified Users',
    path: '/apps/job-management/authorized-users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const JobsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='jobs'
          element={
            <>
              <PageTitle breadcrumbs={jobsBreadcrumbs}>Jobs list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
        <Route
          path='authorized-users'
          element={
            <>
              <PageTitle breadcrumbs={jobsBreadcrumbs}>Notified Users</PageTitle>
              <AuthUsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/job-management/jobs' />} />
    </Routes>
  )
}

export default JobsPage
