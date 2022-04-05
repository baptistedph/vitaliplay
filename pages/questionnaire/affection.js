import { useContext, useState, useEffect } from 'react'
import Title from '@/components/utils/Title'
import Subtitle from '@/components/utils/Subtitle'
import SurveyLayout from '@/components/layouts/SurveyLayout'
import Radio from '@/components/utils/Radio'
import { useFormik } from 'formik'
import Cta from '@/components/utils/Cta'
import useButtonSize from '@/hooks/useButtonSize'
import Checkbox from '@/components/utils/Checkbox'
import AffectionSchema from '@/schemas/survey/Affection'
import Error from '@/components/utils/Error'
import { useRouter } from 'next/router'
import { LinksContext } from '@/contexts/LinksContext'
import { SurveyContext } from '@/contexts/SurveyContext'

const SurveyAffection = () => {
  const { getPage, surveyPages } = useContext(LinksContext)

  const { survey } = useContext(SurveyContext)

  const [store, setStore] = useState()

  useEffect(() => {
    setStore(JSON.parse(window.localStorage.getItem('vitaliplay.survey.store')))
  }, [])

  const router = useRouter()

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      affection: store?.affection || '',
      affectionList: store?.affectionList || [],
    },
    validationSchema: AffectionSchema,
    onSubmit: (values) => {
      window.localStorage.setItem(
        'vitaliplay.survey.store',
        JSON.stringify({ ...store, ...values })
      )
      router.push(getPage(surveyPages, 'pageName', 'Prothèses').path)
    },
  })

  const buttonSize = useButtonSize()

  return (
    <div>
      <div className="xl:max-w-3xl">
        <Title type="3">
          Êtes vous atteints d’une affection longue durée ?
        </Title>
        <div className="mt-4">
          <Subtitle type="2">{survey.ald_description}</Subtitle>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Radio
              id="yes"
              name="affection"
              checked={formik.values.affection === 'yes'}
              onChange={formik.handleChange}
            >
              Oui
            </Radio>
            <Radio
              id="no"
              name="affection"
              checked={formik.values.affection === 'no'}
              onChange={formik.handleChange}
            >
              Non
            </Radio>
            {formik.touched.affection && (
              <div className="md:col-span-2">
                <Error>{formik.errors.affection}</Error>
              </div>
            )}
            <div
              style={{ transitionProperty: 'opacity' }}
              className={`${
                formik.values.affection === 'yes'
                  ? 'h-auto opacity-100'
                  : 'h-0 overflow-hidden opacity-0'
              } flex flex-col gap-4 transition duration-300 ease-linear md:col-span-2`}
            >
              {survey.ald_list?.map((affection, i) => {
                return (
                  <Checkbox
                    key={i}
                    id={`affection-${affection.id}`}
                    name="affectionList"
                    checked={formik.values.affectionList.includes(
                      `affection-${affection.id}`
                    )}
                    onChange={formik.handleChange}
                  >
                    {affection.name}
                  </Checkbox>
                )
              })}
            </div>
          </div>
          {formik.touched.affectionList && (
            <div className="mt-6">
              <Error>{formik.errors.affectionList}</Error>
            </div>
          )}
          <div className="mt-12 flex flex-wrap gap-4 lg:gap-6">
            <Cta buttonType="submit" type="primary" size={buttonSize}>
              Valider
            </Cta>
            <div
              onClick={() =>
                router.push(getPage(surveyPages, 'pageName', 'Prothèses').path)
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

SurveyAffection.Layout = SurveyLayout

export default SurveyAffection
