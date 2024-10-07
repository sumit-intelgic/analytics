
import { FC } from 'react'
import { KTIcon } from '../../../helpers'

type Props = {
    className: string
}

const TopJobsTable: FC<Props> = ({ className }) => {
    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Failed Jobs</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>Over 5 Jobs</span>
                </h3>
                <div
                    className='card-toolbar'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-trigger='hover'
                    title='Click to add a user'
                >
                    {/* <a
            href='#'
            className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTIcon iconName='plus' className='fs-3' />
            New Member
          </a> */}
                </div>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                        {/* begin::Table head */}
                        <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='w-25px'>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value='1'
                                            data-kt-check='true'
                                            data-kt-check-target='.widget-9-check'
                                        />
                                    </div>
                                </th>
                                <th className='min-w-150px'>Name</th>
                                <th className='min-w-140px'>Datetime</th>
                                <th className='min-w-120px'>Status</th>
                                <th className='min-w-120px'>Severity Level</th>
                                <th className='min-w-120px'>Error Details</th>
                            </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>
                            <tr>
                                <td>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                                                DWExport - Night - UPDATED
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                                        04/10/2024
                                    </a>
                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                        10:30 A.M
                                    </span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">Failed</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">17</span>
                                </td>
                                <td>
                                    <a
                                        href='#'
                                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                                    >
                                        <KTIcon iconName='information-4' className='fs-3' />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                                                GMCustChangeLog
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                                        04/10/2024
                                    </a>
                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                        09:30 A.M
                                    </span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">Failed</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">17</span>
                                </td>
                                <td>
                                    <a
                                        href='#'
                                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                                    >
                                        <KTIcon iconName='information-4' className='fs-3' />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                                                MRP DB Fix
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                                        04/10/2024
                                    </a>
                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                        09:00 A.M
                                    </span>
                                </td>
                                <td>
                                    <span className="badge bg-info text-white">Failed</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">17</span>
                                </td>
                                <td>
                                    <a
                                        href='#'
                                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                                    >
                                        <KTIcon iconName='information-4' className='fs-3' />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                                                syspolicy_purge_history
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                                        04/10/2024
                                    </a>
                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>08:00 A.M</span>
                                </td>
                                <td>
                                    <span className="badge bg-primary text-white">Pending</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">17</span>
                                </td>
                                <td>
                                    <a
                                        href='#'
                                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                                    >
                                        <KTIcon iconName='information-4' className='fs-3' />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <div className='d-flex justify-content-start flex-column'>
                                            <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                                                zzz .sp_Whoisactive
                                            </a>
                                            <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                                HTML, JS, ReactJS
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                                        04/10/2024
                                    </a>
                                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                        07:00 A.M
                                    </span>
                                </td>
                                <td>
                                    <span className="badge bg-info text-white">Failed</span>
                                </td>
                                <td>
                                    <span className="badge bg-danger text-white">17</span>
                                </td>
                                <td>
                                    <a
                                        href='#'
                                        className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1'
                                    >
                                        <KTIcon iconName='information-4' className='fs-3' />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                        {/* end::Table body */}
                    </table>
                    {/* end::Table */}
                </div>
                {/* end::Table container */}
            </div>
            {/* begin::Body */}
        </div>
    )
}

export { TopJobsTable }
