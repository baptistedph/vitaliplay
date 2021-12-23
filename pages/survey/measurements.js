import Title from '@/components/utils/Title'
import Subtitle from '@/components/utils/Subtitle'
import SurveyLayout from '@/components/layouts/SurveyLayout'
import Input from '@/components/utils/Input'
import { useFormik } from 'formik'
import Cta from '@/components/utils/Cta'
import useButtonSize from '@/hooks/useButtonSize'
import { SurveyContext } from '@/contexts/SurveyContext'
import { useContext, useEffect, useState } from 'react'
import MeasurementsSchema from '@/schemas/survey/Measurements'
import { useRouter } from 'next/router'

const SurveyMeasurements = () => {
  const [store, setStore] = useState()

  useEffect(() => {
    setStore(JSON.parse(window.localStorage.getItem('vitaliplay.survey.store')))
  }, [])

  const { prefix, getPathByStep } = useContext(SurveyContext)

  const router = useRouter()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      height: store?.height || '',
      weight: store?.weight || '',
    },
    validationSchema: MeasurementsSchema,
    onSubmit: values => {
      window.localStorage.setItem(
        'vitaliplay.survey.store',
        JSON.stringify({ ...store, ...values }),
      )
      router.push(`${prefix}${getPathByStep('Fumeur')}`)
    },
  })

  const buttonSize = useButtonSize()

  return (
    <div>
      <Title type="3">Renseignez votre taille et poids</Title>
      <div className="mt-4">
        <Subtitle type="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida eget
          varius a diam faucibus nec sodales fermentum eget.
        </Subtitle>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-5 grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-3">
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
        <div className="md:col-span-2 mt-10 flex flex-wrap items-start gap-4 lg:gap-6">
          <Cta buttonType="submit" type="primary" size={buttonSize}>
            Valider
          </Cta>
          <div
            onClick={() => router.push(`${prefix}${getPathByStep('Fumeur')}`)}>
            <Cta type="secondary" size={buttonSize}>
              Passer
            </Cta>
          </div>
        </div>
      </form>
      <p className="mt-6 underline text-sm font-bold font-body text-dark-300">
        Je ne souhaite pas répondre
      </p>
    </div>
  )
}

SurveyMeasurements.Layout = SurveyLayout

export default SurveyMeasurements
