
import React from 'react'
import { KTIcon } from '../../../helpers'
import { Dropdown1 } from '../../content/dropdown/Dropdown1'

type Props = {
    className: string
}

const TopJobsWidget: React.FC<Props> = ({ className }) => {
    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0'>
                <h3 className='card-title fw-bold text-gray-900'>Top Jobs</h3>
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

            </div>
            {/* end::Body */}
        </div>
    )
}

export { TopJobsWidget }
