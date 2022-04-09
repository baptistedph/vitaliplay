import Cta from '@/components/utils/Cta'
import { useMediaQuery } from '@mui/material'
import Card from '@/components/pages/account/Card'
import Row from '@/components/pages/account/Row'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AccountLayout from '@/components/layouts/AccountLayout'
import { fetchAPIWithToken } from '@/lib/api'

export const getServerSideProps = async ({ req }) => {
  if (!req.cookies.jwt) {
    return {
      redirect: {
        destination: '/connexion',
        permanent: true,
      },
    }
  }

  const seances = await fetchAPIWithToken('/exercices', req.cookies.jwt)

  return { props: { exercices: seances.exercices, tags: seances.exerciceTags } }
}
const SessionsNewTrainings = ({ exercices, tags }) => {
  const router = useRouter()

  const isMediumScreen = useMediaQuery('(min-width: 768px)')

  return (
    <div className="mt-20 min-h-[calc(100vh_-_165px)] py-5 md:py-16">
      <div className="px-6 md:px-24" onClick={() => router.back()}>
        <Cta arrow="left" type="secondary" size={isMediumScreen ? 'l' : 'm'}>
          Retour
        </Cta>
      </div>
      <div className="mt-6 flex flex-col gap-12">
        <Row
          title="Toutes les séances"
          type="filter"
          mobile={true}
          filterOptions={tags.map((tag) => tag.name)}
        >
          {exercices.map((item) => {
              console.log(item.attributes)
            return (
              <Link key={item.id} href={`${router.route}/[id]`} passHref>
                <a>
                  <Card
                    tagType={item?.attributes?.tags?.data?.id}
                    title={item?.attributes?.name}
                    type="séances"
                    duration={item?.attributes?.duration}
                    level={item?.attributes?.level}
                    bg={
                      item?.attributes?.image?.data?.url
                        ? process.env.NEXT_PUBLIC_STRAPI_API_URL +
                          item?.attributes?.image?.data?.url
                        : '/bg-card.png'
                    }
                  />
                </a>
              </Link>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

SessionsNewTrainings.Layout = AccountLayout

export default SessionsNewTrainings
