import React, {FC} from 'react'
import {Job} from '../../core/_models'

type Props = {
  job: Job
}

const JobInfoCell: FC<Props> = ({job}) => (
  <div className='d-flex flex-column'>
    <span className='text-gray-800 text-hover-primary mb-1'>{job.name}</span>
    <span className='text-muted'>{job.serverName}</span>
  </div>
)

export {JobInfoCell}