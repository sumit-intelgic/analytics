import { FC, useState } from 'react';
import { KTIcon } from '../../../helpers';

type Props = {
    className: string;
};

const TopJobsTable: FC<Props> = ({ className }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalData, setModalData] = useState({ severity: '', errorDetails: '' });

    const handleSeverityClick = (severity: string) => {
        setModalData((prev) => ({ ...prev, severity }));
        setModalVisible(true);
    };

    const handleErrorDetailsClick = (errorDetails: string) => {
        setModalData((prev) => ({ ...prev, errorDetails }));
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalData({ severity: '', errorDetails: '' });
    };

    const jobData = [
        { name: 'DWExport - Night - UPDATED', date: '04/10/2024', time: '10:30 A.M', status: 'Failed', severity: '17', errorDetails: 'Error details for DWExport' },
        { name: 'GMCustChangeLog', date: '04/10/2024', time: '09:30 A.M', status: 'Failed', severity: '17', errorDetails: 'Error details for GMCustChangeLog' },
        { name: 'MRP DB Fix', date: '04/10/2024', time: '09:00 A.M', status: 'Running', severity: '0', errorDetails: 'No errors found' },
        { name: 'syspolicy_purge_history', date: '04/10/2024', time: '08:00 A.M', status: 'Pending', severity: '0', errorDetails: 'Pending checks' },
        { name: 'zzz .sp_Whoisactive', date: '04/10/2024', time: '07:00 A.M', status: 'Completed', severity: '0', errorDetails: 'Completed without errors' },
    ];

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Job Running Status</span>
                    <span className='text-muted mt-1 fw-semibold fs-7'>Over 5 Jobs</span>
                </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                        <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='w-25px'>
                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                        <input className='form-check-input' type='checkbox' value='1' data-kt-check='true' data-kt-check-target='.widget-9-check' />
                                    </div>
                                </th>
                                <th className='min-w-150px'>Name</th>
                                <th className='min-w-140px'>Datetime</th>
                                <th className='min-w-120px'>Status</th>
                                <th className='min-w-120px'>Severity Level</th>
                                <th className='min-w-120px'>Error Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobData.map((job, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                            <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='d-flex justify-content-start flex-column'>
                                                <a href='#' className='text-gray-900 fw-bold text-hover-primary fs-6'>
                                                    {job.name}
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href='#' className='text-gray-900 fw-bold text-hover-primary d-block fs-6'>
                                            {job.date}
                                        </a>
                                        <span className='text-muted fw-semibold text-muted d-block fs-7'>
                                            {job.time}
                                        </span>
                                    </td>
                                    <td>
                                        <span className={`badge ${job.status === 'Failed' ? 'bg-danger' : job.status === 'Running' ? 'bg-info' : job.status === 'Pending' ? 'bg-primary' : 'bg-success'} text-white`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="badge bg-danger text-white" onClick={() => handleSeverityClick(job.severity)} style={{ cursor: 'pointer' }}>
                                            {job.severity}
                                        </span>
                                    </td>
                                    <td>
                                        <a href='javascript:void(0)' className='btn btn-icon btn-bg-light btn-active-color-danger btn-sm me-1' onClick={() => handleErrorDetailsClick(job.errorDetails)}>
                                            <KTIcon iconName='information-4' className='fs-3' />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Modal for displaying severity and error details */}
            {modalVisible && (
                <div className="modal fade show" style={{ display: 'block'}} tabIndex={-1} aria-modal="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Details</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Severity Level:</strong> {modalData.severity}</p>
                                <p><strong>Error Details:</strong> {modalData.errorDetails}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { TopJobsTable };
