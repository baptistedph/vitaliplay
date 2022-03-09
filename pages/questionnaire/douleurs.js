import { LinksContext } from '@/contexts/LinksContext'
import { useContext, useState, useEffect } from 'react'
import Title from '@/components/utils/Title'
import Subtitle from '@/components/utils/Subtitle'
import SurveyLayout from '@/components/layouts/SurveyLayout'
import Radio from '@/components/utils/Radio'
import { useFormik } from 'formik'
import Cta from '@/components/utils/Cta'
import useButtonSize from '@/hooks/useButtonSize'
import Checkbox from '@/components/utils/Checkbox'
import Error from '@/components/utils/Error'
import PainSchema from '@/schemas/survey/Pain'
import { useRouter } from 'next/router'

const SurveyPain = () => {
  const { getPage, surveyPages } = useContext(LinksContext)

  const [store, setStore] = useState()

  useEffect(() => {
    setStore(JSON.parse(window.localStorage.getItem('vitaliplay.survey.store')))
  }, [])

  const [painList] = useState([
    'Cervicales',
    'Epaules',
    'Coude / Poignet / Main',
    'Dorso-lombaire',
    'Hanches',
    'Genou',
    'Cheville / Pied',
  ])

  const router = useRouter()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      pain: store?.pain || '',
      painList: store?.painList || [],
      painScale: store?.painScale || '',
    },
    validationSchema: PainSchema,
    onSubmit: (values) => {
      window.localStorage.setItem(
        'vitaliplay.survey.store',
        JSON.stringify({ ...store, ...values })
      )
      router.push(getPage(surveyPages, 'pageName', 'Affection').path)
    },
  })

  const buttonSize = useButtonSize()

  return (
    <div>
      <div className="xl:max-w-3xl">
        <Title type="3">
          Souffrez-vous de douleurs chroniques ? (Depuis plus de 3 mois)
        </Title>
        <div className="mt-4">
          <Subtitle type="2">
            Si oui, où sont localisées vos douleurs ?
          </Subtitle>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Radio
              id="yes"
              name="pain"
              checked={formik.values.pain === 'yes'}
              onChange={formik.handleChange}
            >
              Oui
            </Radio>
            <Radio
              id="no"
              name="pain"
              checked={formik.values.pain === 'no'}
              onChange={formik.handleChange}
            >
              Non
            </Radio>
            {formik.touched.pain && (
              <div className="md:col-span-2">
                <Error>{formik.errors.pain}</Error>
              </div>
            )}
            <div
              style={{ transitionProperty: 'opacity' }}
              className={`${
                formik.values.pain === 'yes'
                  ? 'h-auto opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              } grid grid-cols-1 gap-6 transition duration-300 ease-linear md:col-span-2 md:grid-cols-2`}
            >
              {painList.map((pain, i) => {
                return (
                  <Checkbox
                    key={i}
                    id={pain}
                    name="painList"
                    checked={formik.values.painList.includes(pain)}
                    onChange={formik.handleChange}
                  >
                    {pain}
                  </Checkbox>
                )
              })}
            </div>
          </div>
          {formik.touched.painList && (
            <div className="mt-6">
              <Error>{formik.errors.painList}</Error>
            </div>
          )}
          <div
            style={{ transitionProperty: 'opacity' }}
            className={`${
              formik.values.pain === 'yes'
                ? 'mt-14 h-auto opacity-100'
                : 'h-0 overflow-hidden opacity-0'
            } col-span-2 transition duration-300 ease-linear`}
          >
            <Title type="3">
              Pouvez-vous évaluer ces douleurs sur une échelle de 0 à 10 ?
            </Title>
            <div className="mt-4">
              <Subtitle type="2">
                0 étant pas de douleur et 10 une douleur extrême.
              </Subtitle>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              {Array.from({ length: 11 }, (_, i) => i + 0).map((scale, i) => {
                return (
                  <div key={i}>
                    <Radio
                      id={scale.toString()}
                      name="painScale"
                      checked={formik.values.painScale === scale.toString()}
                      onChange={formik.handleChange}
                      number={true}
                    >
                      {scale}
                    </Radio>
                  </div>
                )
              })}
            </div>
          </div>
          {formik.touched.painScale && (
            <div className="mt-6">
              <Error>{formik.errors.painScale}</Error>
            </div>
          )}
          <div className="mt-12 flex flex-wrap gap-4 lg:gap-6">
            <Cta buttonType="submit" type="primary" size={buttonSize}>
              Valider
            </Cta>
            <div
              onClick={() =>
                router.push(getPage(surveyPages, 'pageName', 'Affection').path)
              }
            >
              <Cta type="secondary" size={buttonSize}>
                Passer
              </Cta>
            </div>
          </div>
        </form>
        <p className="mt-6 font-body text-sm font-bold text-dark-300 underline">
          Je ne souhaite pas répondre
        </p>
      </div>
    </div>
  )
}

SurveyPain.Layout = SurveyLayout

export default SurveyPain