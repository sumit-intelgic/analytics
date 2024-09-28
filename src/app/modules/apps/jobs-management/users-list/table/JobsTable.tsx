import React, { useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseLoading } from '../core/QueryResponseProvider'
import { jobsColumns } from './columns/_columns'  // Changed from usersColumns to jobsColumns
import { Job } from '../core/_models'  // Changed from Jobs to Job (singular)
import { JobsListLoading } from '../components/loading/JobsListLoading'
import { JobsListPagination } from '../components/pagination/JobsListPagination'
import { KTCardBody } from '../../../../../../_metronic/helpers'

const JobsTable = () => {
  const jobs = useMemo(() => [
    {
      id: 1,
      jobId: '1',
      name: 'test job 1',
      serverName: 'string',
      monitoring: true,
      notification: true,
      autorun: false,
      successEmail: true,
      threshold: 35,
      fileCount: 25
    }
  ], [])
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => jobs, [jobs])
  const columns = useMemo(() => jobsColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='py-4'>
      <div className='table-responsive'>
        <table
          id='kt_table_jobs'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
          {...getTableProps()}
        >
          <thead>
            <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
              {headers.map((column: ColumnInstance<Job>) => (
                <CustomHeaderColumn key={column.id} column={column} />
              ))}
            </tr>
          </thead>
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Job>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <JobsListPagination />
      {isLoading && <JobsListLoading />}
    </KTCardBody>
  )
}

export { JobsTable }