import { FC } from 'react'
import { useIntl } from 'react-intl'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  ListsWidget3,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget20,
  ListsWidget26,
} from '../../../_metronic/partials/widgets'
import { ToolbarWrapper } from '../../../_metronic/layout/components/toolbar'
import { Content } from '../../../_metronic/layout/components/content'
import { CurrentlyRunningWidget } from '../../../_metronic/partials/widgets/charts/CurrentlyRunningWidget'
import { ProjectSuccessRateWidget } from '../../../_metronic/partials/widgets/charts/ProjectSuccessRateWidget'
import { ProjectFailureRateWidget } from '../../../_metronic/partials/widgets/charts/ProjectFailureRateWidget'
import { MiddleSection } from '../../../_metronic/partials/widgets/_new/cards/MiddleSection'
import { TopJobsTable } from '../../../_metronic/partials/widgets/tables/TopJobsTable'

const DashboardPage: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      {/* begin::Row */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget20
            className='h-md-50 mb-5 mb-xl-10'
            description='Active Jobs'
            color='#F1416C'
            img={toAbsoluteUrl('media/patterns/vector-1.png')}
          />
          <CardsWidget7
            className='h-md-50 mb-5 mb-xl-10'
            description='Professionals'
            icon={false}
            stats={357}
            labelColor='dark'
            textColor='gray-300'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <MiddleSection className='h-md-50 mb-5 mb-xl-10' />
          <ListsWidget26 className='h-lg-50' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-6'>
          <MixedWidget8
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='150px'
          // dropdownType='Dropdown4'
          />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      <div className="row gx-5 gx-xl-10">
        <TopJobsTable className="card-xl-stretch mb-xl-8" />
      </div>
      {/* begin::Row */}
      <div className='row gx-5 gx-xl-10'>
        {/* begin::Col */}
        <div className='col-xxl-12 mb-5 mb-xl-10'>
          {/* <app-new-charts-widget8 cssclassName="h-xl-100" chartHeight="275px" [chartHeightNumber]="275"></app-new-charts-widget8> */}
          <CurrentlyRunningWidget className='card-xl-stretch mb-xl-8' />

        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          <ProjectSuccessRateWidget className='card-xl-stretch mb-5 mb-xl-8' successRate={[20, 30 , 10, 60, 70, 45, 100]} />
          {/* <ChartsWidget8 className='card-xl-stretch mb-5 mb-xl-8' /> */}

        </div>
        <div className='col-xxl-6 mb-5 mb-xl-10'>
          {/* <ProjectSuccessRateWidget className='card-xl-stretch mb-5 mb-xl-8' /> */}
          {/* <ChartsWidget8 className='card-xl-stretch mb-5 mb-xl-8' /> */}
          <ProjectFailureRateWidget className='card-xl-stretch mb-5 mb-xl-8' failureRate={[80, 70, 90, 40, 30, 55, 0]} />

        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 gx-xl-8'>
        <div className='col-xxl-4'>
          <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
        </div>
        <div className='col-xl-8'>
          <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>
      </div>
      {/* end::Row */}

    </Content>
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
