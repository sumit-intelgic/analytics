import React, {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'

type Props = {
  value: boolean | undefined
}

const JobBooleanCell: FC<Props> = ({value}) => (
  <div className='badge badge-light-success fw-bolder'>
    {value ? (
      <img
        src={toAbsoluteUrl('/media/icons/duotune/general/gen043.svg')}
        className='w-15px h-15px'
        alt='True'
      />
    ) : (
      <img
        src={toAbsoluteUrl('/media/icons/duotune/general/gen040.svg')}
        className='w-15px h-15px'
        alt='False'
      />
    )}
  </div>
)

export {JobBooleanCell}