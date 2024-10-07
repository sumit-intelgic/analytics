import React, { useEffect, useRef } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { getCSSVariableValue } from '../../../assets/ts/_utils'
import { useThemeMode } from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
    className: string
    failureRate: number[] // Pass failure rate data as a prop
}

const ProjectFailureRateWidget: React.FC<Props> = ({ className, failureRate }) => {
    const chartRef = useRef<HTMLDivElement | null>(null)
    const { mode } = useThemeMode()

    useEffect(() => {
        const refreshMode = () => {
            if (!chartRef.current) {
                return
            }

            const chart = new ApexCharts(chartRef.current, getChartOptions(failureRate))
            if (chart) {
                chart.render()
            }

            return chart
        }
        const chart = refreshMode()

        return () => {
            if (chart) {
                chart.destroy()
            }
        }
    }, [chartRef, mode, failureRate])

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Job Failure Rate</span>
                    <span className='text-muted fw-semibold fs-7'>Overview of failure rate per period</span>
                </h3>

                {/* begin::Toolbar */}
                <div className='card-toolbar' data-kt-buttons='true'>
                    <a className='btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1'>
                        Year
                    </a>
                    <a className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1'>
                        Month
                    </a>
                    <a className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4'>
                        Week
                    </a>
                </div>
                {/* end::Toolbar */}
            </div>
            {/* end::Header */}

            {/* begin::Body */}
            <div className='card-body'>
                {/* begin::Chart */}
                <div ref={chartRef} id='kt_charts_widget_3_chart' style={{ height: '350px' }}></div>
                {/* end::Chart */}
            </div>
            {/* end::Body */}
        </div>
    )
}

export { ProjectFailureRateWidget }

function getChartOptions(failureRate: number[]): ApexOptions {
    const labelColor = getCSSVariableValue('--bs-gray-500')
    const borderColor = getCSSVariableValue('--bs-gray-200')
    const baseColor = getCSSVariableValue('--bs-danger')
    const lightColor = getCSSVariableValue('--bs-danger') // Changed to a lighter color for better visualization

    return {
        series: [
            {
                name: 'Failure Rate',
                data: failureRate,
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'bar', // Change type to 'bar'
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%', // Adjusted column width for bar chart
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            colors: [baseColor], // Use color for bars
        },
        stroke: {
            show: true,
            width: 2,
            colors: [baseColor],
        },
        xaxis: {
            categories: [
                'DWExport - Night',
                'GMCustChangeLog',
                'MRP DB Fix',
                'syspolicy_purge_history',
                'zzz .sp_Whoisactive',
                'MDI Generate Files',
                'Rouse - Daily',
            ],
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
            max: 100, // Set max to 100 for percentage
            labels: {
                style: {
                    colors: labelColor,
                    fontSize: '12px',
                },
                formatter: function (val) {
                    return `${val}%`
                },
            },
            title: {
                text: 'Failure Rate (%)',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `${val}%`
                },
            },
        },
        colors: [lightColor], // Color for tooltip and other elements
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        markers: {
            strokeColors: baseColor,
            strokeWidth: 3,
        },
    }
}
