import CheckupLayout from '@/components/layouts/CheckupLayout'
import Title from '@/components/utils/Title'
import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import Cta from '@/components/utils/Cta'
import useButtonSize from '@/hooks/useButtonSize'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Radio from '@/components/utils/Radio'
import MoodSchema from '@/schemas/checkup/well-being/Mood'
import Error from '@/components/utils/Error'
import { LinksContext } from '@/contexts/LinksContext'
import { CheckupContext } from '@/contexts/CheckupContext'
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

const WellBeingMood = () => {
  const [store, setStore] = useState()
  const { getPage, checkupPages } = useContext(LinksContext)
  const { checkup } = useContext(CheckupContext)

  const [labels] = useState([
    'Tout le temps',
    'La plupart du temps',
    'Plus de la moitié du temps',
    'Moins de la moitié du temps',
    'De temps en temps',
    'Jamais',
  ])

  const router = useRouter()

  useEffect(() => {
    setStore(
      JSON.parse(window.localStorage.getItem('vitaliplay.checkup.store'))
    )
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      moodScale: store?.wellBeing?.mood || '',
    },
    validationSchema: MoodSchema,
    onSubmit: (values) => {
      window.localStorage.setItem(
        'vitaliplay.checkup.store',
        JSON.stringify({
          ...store,
          wellBeing: {
            ...store?.wellBeing,
            mood: parseInt(values.moodScale.split('-').at(-1)),
          },
        })
      )
      router.push(getPage(checkupPages, 'pageName', 'Tranquilité').path)
    },
  })

  const buttonSize = useButtonSize()

  return (
    <div>
      <Title type="3">{checkup.checkupQuestions?.[0].checkupQuestion}</Title>
      <form onSubmit={formik.handleSubmit} className="mt-12">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 xl:grid-cols-6">
          {checkup.checkupQuestions?.[0].checkupQuestionChoices.map(
            (question) => {
              return (
                <div key={question.id}>
                  <Radio
                    label={question.checkupQuestionChoiceDescription}
                    id={`checkup-question-choice-${question.checkupQuestionChoiceValue}`}
                    name="moodScale"
                    checked={
                      formik.values.moodScale ===
                      `checkup-question-choice-${question.checkupQuestionChoiceValue}`
                    }
                    onChange={formik.handleChange}
                    number={true}
                  >
                    {question.checkupQuestionChoiceValue}
                  </Radio>
                </div>
              )
            }
          )}
        </div>
        {formik.touched.moodScale && (
          <div className="mt-8">
            <Error>{formik.errors.moodScale}</Error>
          </div>
        )}
        <div className="mt-10">
          <Cta buttonType="submit" type="primary" size={buttonSize}>
            Valider
          </Cta>
        </div>
      </form>
    </div>
  )
}

WellBeingMood.Layout = CheckupLayout

export default WellBeingMood
