import { LinksContext } from '@/contexts/LinksContext'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { useEffect } from 'react'
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

const ProfileHealthInformation = () => {
  const router = useRouter()

  const { getPage, surveyPages } = useContext(LinksContext)

  useEffect(() => {
    router.push(getPage(surveyPages, 'pageName', 'Questionnaire').path)
  }, [])

  return <></>
}

export default ProfileHealthInformation
