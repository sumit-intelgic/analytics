import React, {FC} from 'react'

type Props = {
  value: number | undefined
}

const JobNumberCell: FC<Props> = ({value}) => (
  <span className='fw-bold text-muted'>{value !== undefined ? value.toString() : 'N/A'}</span>
)

export {JobNumberCell}