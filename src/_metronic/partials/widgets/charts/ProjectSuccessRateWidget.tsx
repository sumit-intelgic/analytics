import React, { useEffect, useRef } from 'react'
import ApexCharts, { ApexOptions } from 'apexcharts'
import { getCSSVariableValue } from '../../../assets/ts/_utils'
import { useThemeMode } from '../../layout/theme-mode/ThemeModeProvider'

type Props = {
    className: string
    successRate: number[] // Pass success rate data as a prop
}

const ProjectSuccessRateWidget: React.FC<Props> = ({ className, successRate }) => {
    const chartRef = useRef<HTMLDivElement | null>(null)
    const { mode } = useThemeMode()

    useEffect(() => {
        const refreshMode = () => {
            if (!chartRef.current) {
                return
            }

            const chart = new ApexCharts(chartRef.current, getChartOptions(successRate))
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
    }, [chartRef, mode, successRate])

    return (
        <div className={`card ${className}`}>
            {/* begin::Header */}
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Project Success Rate</span>
                    <span className='text-muted fw-semibold fs-7'>Overview of success rate per period</span>
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

export { ProjectSuccessRateWidget }

function getChartOptions(successRate: number[]): ApexOptions {
    const labelColor = getCSSVariableValue('--bs-gray-500')
    const borderColor = getCSSVariableValue('--bs-gray-200')
    const baseColor = getCSSVariableValue('--bs-success')
    const lightColor = getCSSVariableValue('--bs-success-light')

    return {
        series: [
            {
                name: 'Success Rate',
                data: successRate,
            },
        ],
        chart: {
            fontFamily: 'inherit',
            type: 'area',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {},
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.4,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        stroke: {
            curve: 'smooth',
            width: 3,
            colors: [baseColor],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'], // Example categories
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
                text: 'Success Rate (%)',
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return `${val}%`
                },
            },
        },
        colors: [lightColor],
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
