import {Column} from 'react-table'
import {JobCustomHeader} from './JobCustomHeader'
import {JobInfoCell} from './JobInfoCell'
import {JobActionsCell} from './JobActionsCell'
import {JobBooleanCell} from './JobBooleanCell'
import {JobNumberCell} from './JobNumberCell'
import { Job } from '../../core/_models'


const jobsColumns: ReadonlyArray<Column<Job>> = [
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Job ID' className='min-w-125px' />,
    accessor: 'jobId',
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({...props}) => <JobInfoCell job={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Server Name' className='min-w-125px' />,
    accessor: 'serverName',
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Monitoring' className='min-w-125px' />,
    id: 'monitoring',
    Cell: ({...props}) => <JobBooleanCell value={props.data[props.row.index].monitoring} />,
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Notification' className='min-w-125px' />,
    id: 'notification',
    Cell: ({...props}) => <JobBooleanCell value={props.data[props.row.index].notification} />,
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Autorun' className='min-w-125px' />,
    id: 'autorun',
    Cell: ({...props}) => <JobBooleanCell value={props.data[props.row.index].autorun} />,
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Success Email' className='min-w-125px' />,
    id: 'successEmail',
    Cell: ({...props}) => <JobBooleanCell value={props.data[props.row.index].successEmail} />,
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='Threshold' className='min-w-125px' />,
    id: 'threshold',
    Cell: ({...props}) => <JobNumberCell value={props.data[props.row.index].threshold} />,
  },
  {
    Header: (props) => <JobCustomHeader tableProps={props} title='File Count' className='min-w-125px' />,
    id: 'fileCount',
    Cell: ({...props}) => <JobNumberCell value={props.data[props.row.index].fileCount} />,
  },
  {
    Header: (props) => (
      <JobCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <JobActionsCell id={props.data[props.row.index].id} />,
  },
]

export {jobsColumns}
