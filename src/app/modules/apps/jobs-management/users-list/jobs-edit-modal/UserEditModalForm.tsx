import { FC, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { isNotEmpty, toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { initialUser, User } from '../core/_models'
import clsx from 'clsx'
import { useListView } from '../core/ListViewProvider'
import { JobsListLoading } from '../components/loading/JobsListLoading'
import { createUser, updateUser } from '../core/_requests'
import { useQueryResponse } from '../core/QueryResponseProvider'

type Props = {
  isUserLoading: boolean
  user: User
}

const editUserSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Name is required'),
})

const UserEditModalForm: FC<Props> = ({ user, isUserLoading }) => {
  const { setItemIdForUpdate } = useListView()
  const { refetch } = useQueryResponse()

  const [userForEdit] = useState<User>({
    ...user,
    avatar: user.avatar || initialUser.avatar,
    role: user.role || initialUser.role,
    position: user.position || initialUser.position,
    name: user.name || initialUser.name,
    email: user.email || initialUser.email,
  })

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const blankImg = toAbsoluteUrl('media/svg/avatars/blank.svg')
  const userAvatarImg = toAbsoluteUrl(`media/${userForEdit.avatar}`)

  const formik = useFormik({
    initialValues: userForEdit,
    validationSchema: editUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <form id='kt_modal_add_user_form' className='form' onSubmit={formik.handleSubmit} noValidate>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Job Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Job name'
              {...formik.getFieldProps('name')}
              type='text'
              name='name'
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                { 'is-invalid': formik.touched.name && formik.errors.name },
                {
                  'is-valid': formik.touched.name && !formik.errors.name,
                }
              )}
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {formik.touched.name && formik.errors.name && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.name}</span>
                </div>
              </div>
            )}
            {/* end::Input */}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Server Name</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Server Name'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                { 'is-invalid': formik.touched.email && formik.errors.email },
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='text'
              name='email'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className='required fw-bold fs-6 mb-2'>Threshold Limit</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              placeholder='Threshold Limit (In Minutes)'
              {...formik.getFieldProps('email')}
              className={clsx(
                'form-control form-control-solid mb-3 mb-lg-0',
                { 'is-invalid': formik.touched.email && formik.errors.email },
                {
                  'is-valid': formik.touched.email && !formik.errors.email,
                }
              )}
              type='text'
              name='email'
              autoComplete='off'
              disabled={formik.isSubmitting || isUserLoading}
            />
            {/* end::Input */}
            {formik.touched.email && formik.errors.email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.email}</span>
              </div>
            )}
          </div>
          {/* end::Input group */}

          <div className="row">
            <div className="col-md-6">
              <div className='mb-6'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-5'>Notification</label>
                {/* end::Label */}
                {/* begin::Roles */}
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Administrator'
                      id='kt_modal_update_role_option_0'
                      checked={formik.values.role === 'Administrator'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />

                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                      <div className='fw-bolder text-gray-800'>Yes</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}
                <div className='separator separator-dashed my-5'></div>
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Developer'
                      id='kt_modal_update_role_option_1'
                      checked={formik.values.role === 'Developer'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />
                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                      <div className='fw-bolder text-gray-800'>No</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}

                {/* end::Roles */}
              </div>
            </div>
            <div className="col-md-6">
              <div className='mb-6'>
                <label className='required fw-bold fs-6 mb-5'>Monitoring</label>
                <div className='d-flex fv-row'>
                  <div className='form-check form-check-custom form-check-solid'>
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Administrator'
                      id='kt_modal_update_role_option_0'
                      checked={formik.values.role === 'Administrator'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                      <div className='fw-bolder text-gray-800'>Yes</div>
                    </label>
                  </div>
                </div>
                <div className='separator separator-dashed my-5'></div>
                <div className='d-flex fv-row'>
                  <div className='form-check form-check-custom form-check-solid'>
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Developer'
                      id='kt_modal_update_role_option_1'
                      checked={formik.values.role === 'Developer'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                      <div className='fw-bolder text-gray-800'>No</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}

                {/* end::Roles */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className='mb-7'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-5'>Autorun</label>
                {/* end::Label */}
                {/* begin::Roles */}
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Administrator'
                      id='kt_modal_update_role_option_0'
                      checked={formik.values.role === 'Administrator'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />

                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                      <div className='fw-bolder text-gray-800'>Yes</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}
                <div className='separator separator-dashed my-5'></div>
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Developer'
                      id='kt_modal_update_role_option_1'
                      checked={formik.values.role === 'Developer'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />
                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                      <div className='fw-bolder text-gray-800'>No</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}

                {/* end::Roles */}
              </div>
            </div>
            <div className="col-md-6">
              <div className='mb-7'>
                {/* begin::Label */}
                <label className='required fw-bold fs-6 mb-5'>Success Email</label>
                {/* end::Label */}
                {/* begin::Roles */}
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Administrator'
                      id='kt_modal_update_role_option_0'
                      checked={formik.values.role === 'Administrator'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />

                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_0'>
                      <div className='fw-bolder text-gray-800'>Yes</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}
                <div className='separator separator-dashed my-5'></div>
                {/* begin::Input row */}
                <div className='d-flex fv-row'>
                  {/* begin::Radio */}
                  <div className='form-check form-check-custom form-check-solid'>
                    {/* begin::Input */}
                    <input
                      className='form-check-input me-3'
                      {...formik.getFieldProps('role')}
                      name='role'
                      type='radio'
                      value='Developer'
                      id='kt_modal_update_role_option_1'
                      checked={formik.values.role === 'Developer'}
                      disabled={formik.isSubmitting || isUserLoading}
                    />
                    {/* end::Input */}
                    {/* begin::Label */}
                    <label className='form-check-label' htmlFor='kt_modal_update_role_option_1'>
                      <div className='fw-bolder text-gray-800'>No</div>
                    </label>
                    {/* end::Label */}
                  </div>
                  {/* end::Radio */}
                </div>
                {/* end::Input row */}

                {/* end::Roles */}
              </div>
            </div>
          </div>
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
          <button
            type='reset'
            onClick={() => cancel()}
            className='btn btn-light me-3'
            data-kt-users-modal-action='cancel'
            disabled={formik.isSubmitting || isUserLoading}
          >
            Discard
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-users-modal-action='submit'
            disabled={isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
          >
            <span className='indicator-label'>Submit</span>
            {(formik.isSubmitting || isUserLoading) && (
              <span className='indicator-progress'>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>
        </div>
        {/* end::Actions */}
      </form>
      {(formik.isSubmitting || isUserLoading) && <JobsListLoading />}
    </>
  )
}

export { UserEditModalForm }
