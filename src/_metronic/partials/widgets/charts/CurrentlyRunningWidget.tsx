
import { useEffect, useRef, FC } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { KTIcon } from '../../../helpers'
import { Dropdown1 } from '../../content/dropdown/Dropdown1'
import { getCSS, getCSSVariableValue } from '../../../assets/ts/_utils'
import { useThemeMode } from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
    className: string
}

const CurrentlyRunningWidget: FC<Props> = ({ className }) => {
    const chartRef = useRef<HTMLDivElement | null>(null)
    const { mode } = useThemeMode()

    useEffect(() => {
        const chart = refreshChart()

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
    }, [chartRef, mode])

    const refreshChart = () => {
        if (!chartRef.current) {
            return
        }

        const height = parseInt(getCSS(chartRef.current, 'height'))

        const chart = new ApexCharts(chartRef.current, getChartOptions(height, jobData))
        if (chart) {
            chart.render()
        }

        return chart
    }

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                {/* begin::Title */}
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Past Activity</span>

                    <span className='text-muted fw-semibold fs-7'>Running Status Of All Jobs</span>
                </h3>
                {/* end::Title */}

                {/* begin::Toolbar */}
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
                {/* end::Toolbar */}
            </div>
            {/* end::Header */}

            {/* begin::Body */}
            <div className='card-body'>
                {/* begin::Chart */}
                <div ref={chartRef} id='kt_charts_widget_1_chart' style={{ height: '350px' }} />
                {/* end::Chart */}
            </div>
            {/* end::Body */}
        </div>
    )
}

export { CurrentlyRunningWidget }

const jobData = [
    { name: 'DWExport - Night - UPDATED', status: 'succeeded', date: '2024-09-28' },
    { name: 'GMCustChangeLog', status: 'failed', date: '2024-09-28' },
    { name: 'MRP DB Fix', status: 'running', date: '2024-09-29' },
    { name: 'syspolicy_purge_history', status: 'canceled', date: '2024-09-30' },
    { name: 'zzz .sp_Whoisactive', status: 'succeeded', date: '2024-09-30' },
    { name: 'MDI Generate Files', status: 'failed', date: '2024-10-01' },
    { name: 'Rouse - Daily', status: 'succeeded', date: '2024-10-01' },
    { name: 'AX_Prod_Import-Phase2', status: 'canceled', date: '2024-10-01' },
    { name: 'AX_Prod_Import_Daily Commissions', status: 'running', date: '2024-10-02' },
    { name: 'Ceridian Time Punch InOut - PS', status: 'failed', date: '2024-10-02' },

];



function getChartOptions(height: number, jobData: any[]): ApexOptions {
    const labelColor = getCSSVariableValue('--bs-gray-500')
    const borderColor = getCSSVariableValue('--bs-gray-200')
    const succeededColor = getCSSVariableValue('--bs-success')
    const runningColor = getCSSVariableValue('--bs-primary')
    const failedColor = getCSSVariableValue('--bs-danger')
    const canceledColor = getCSSVariableValue('--bs-warning')
    const dates = Array.from(new Set(jobData.map(job => job.date))); // Unique dates for the x-axis
    const statusGroups: { succeeded: number[], running: number[], failed: number[], canceled: number[] } = {
        succeeded: [],
        running: [],
        failed: [],
        canceled: []
    };
    dates.forEach(date => {
        // For each date, calculate how many jobs are in each status
        const jobsOnDate = jobData.filter(job => job.date === date);
        statusGroups.succeeded.push(jobsOnDate.filter(job => job.status === 'succeeded').length);
        statusGroups.running.push(jobsOnDate.filter(job => job.status === 'running').length);
        statusGroups.failed.push(jobsOnDate.filter(job => job.status === 'failed').length);
        statusGroups.canceled.push(jobsOnDate.filter(job => job.status === 'canceled').length);
    });
    return {
        series: [
            { name: 'Succeeded', data: statusGroups.succeeded },
            { name: 'Running', data: statusGroups.running },
            { name: 'Failed', data: statusGroups.failed },
            { name: 'Canceled', data: statusGroups.canceled }
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                borderRadius: 5,
            },
        },
        legend: {
            show: true,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: dates, // Dates
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            title: {
                text: 'Job Count',
            },
            min: 0,
            max: 2, // Setting the range of the count
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            style: {
                fontSize: '12px',
            },
            y: {
                formatter: function (val, { dataPointIndex }) {
                    const jobsOnDate = jobData.filter(job => job.date === dates[dataPointIndex]);
                    const jobNames = jobsOnDate.map(job => job.name).join(', ');
                    return jobNames + ` (${val} Jobs)`;
                }
            },
        },
        colors: [succeededColor, runningColor, failedColor, canceledColor], // Colors for each status
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    }
}

