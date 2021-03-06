import Title from '@/components/utils/Title'
import Subtitle from '@/components/utils/Subtitle'
import SurveyLayout from '@/components/layouts/SurveyLayout'
import Input from '@/components/utils/Input'
import { useFormik } from 'formik'
import Cta from '@/components/utils/Cta'
import useButtonSize from '@/hooks/useButtonSize'
import { useContext, useEffect, useState } from 'react'
import MeasurementsSchema from '@/schemas/survey/Measurements'
import { useRouter } from 'next/router'
import { LinksContext } from '@/contexts/LinksContext'
import { SurveyContext } from '@/contexts/SurveyContext'
import { fetchAPIWithToken } from '@/lib/api'

export const getServerSideProps = async ({ req, query }) => {
  if (!req.cookies.jwt) {
    return {
      redirect: {
        destination: '/connexion',
        permanent: true,
      },
    }
  }

  const paid = await fetchAPIWithToken(
    '/users/me/subscription',
    req.cookies.jwt,
    false
  )

  if (paid.status !== 'paid') {
    return {
      redirect: {
        destination: '/abonnements',
        permanent: true,
      },
    }
  }

  return { props: {} }
}

const SurveyMeasurements = () => {
  const [store, setStore] = useState()

  useEffect(() => {
    setStore(JSON.parse(window.localStorage.getItem('vitaliplay.survey.store')))
  }, [])

  const { getPage, surveyPages } = useContext(LinksContext)
  const { survey } = useContext(SurveyContext)

  const router = useRouter()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      height: store?.height || '',
      weight: store?.weight || '',
    },
    validationSchema: MeasurementsSchema,
    onSubmit: (values) => {
      window.localStorage.setItem(
        'vitaliplay.survey.store',
        JSON.stringify({ ...store, ...values })
      )
      router.push(getPage(surveyPages, 'pageName', 'Fumeur').path)
    },
  })

  const buttonSize = useButtonSize()

  return (
    <div>
      <Title type="3">{survey.enterWeightTitle}</Title>
      <div className="mt-4">
        <Subtitle type="2">{survey.enterWeightDescription}</Subtitle>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"
      >
        <Input
          label="Taille (en cm)"
          name="height"
          placeholder="ex. 175"
          onChange={formik.handleChange}
          value={formik.values.height}
          error={formik.touched.height && formik.errors.height}
        />
        <Input
          label="Poids"
          name="weight"
          onChange={formik.handleChange}
          value={formik.values.weight}
          error={formik.touched.weight && formik.errors.weight}
        />
        <div className="mt-10 flex flex-wrap items-start gap-4 md:col-span-2 lg:gap-6">
          <Cta buttonType="submit" type="primary" size={buttonSize}>
            Valider
          </Cta>
          <div
            onClick={() =>
              router.push(getPage(surveyPages, 'pageName', 'Fumeur').path)
            }
          >
            <Cta type="secondary" size={buttonSize}>
              Passer
            </Cta>
          </div>
        </div>
      </form>
    </div>
  )
}

SurveyMeasurements.Layout = SurveyLayout

export default SurveyMeasurements
