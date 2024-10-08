
import React from 'react'
import { KTIcon } from '../../../helpers'
import { Dropdown1 } from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget3: React.FC<Props> = ({ className }) => {
  const jobs = [
    { title: 'DWExport - Night', due: 'Due in 2 Days', status: 'Active', bulletColor: 'success' },
    { title: 'GMCustChangeLog', due: 'Due in 3 Days', status: 'Active', bulletColor: 'success' },
    { title: 'MRP DB Fix', due: 'Due in 5 Days', status: 'Active', bulletColor: 'success' },
    { title: 'syspolicy_purge_history', due: 'Due in 2 Days', status: 'Active', bulletColor: 'success' },
    { title: 'zzz .sp_Whoisactive', due: 'Due in 12 Days', status: 'Active', bulletColor: 'success' },
    { title: 'MDI Generate Files', due: 'Due in 1 week', status: 'Active', bulletColor: 'success' },
    { title: 'Rouse - Daily', due: 'Due in 4 Days', status: 'Active', bulletColor: 'success' },
  ];
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-gray-900'>Active Jobs</h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {/* begin::Item */}
        {jobs.map((job, index) => (
          <div key={index} className='d-flex align-items-center mb-8'>
            {/* begin::Bullet */}
            <span className={`bullet bullet-vertical h-40px bg-${job.bulletColor}`}></span>
            {/* end::Bullet */}
            {/* begin::Checkbox */}
            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' value='' />
            </div>
            {/* end::Checkbox */}
            {/* begin::Description */}
            <div className='flex-grow-1'>
              <a href='#' className='text-gray-800 text-hover-primary fw-bold fs-6'>
                {job.title}
              </a>
              <span className='text-muted fw-semibold d-block'>{job.due}</span>
            </div>
            {/* end::Description */}
            <span className={`badge badge-light-${job.bulletColor} fs-8 fw-bold`}>{job.status}</span>
          </div>
        ))}
      </div>
      {/* end::Body */}
    </div>
  )
}

export { ListsWidget3 }
