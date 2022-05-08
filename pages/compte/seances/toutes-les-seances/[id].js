import Title from '@/components/utils/Title'
import Cta from '@/components/utils/Cta'
import { useMediaQuery } from '@mui/material'
import Card from '@/components/pages/account/Card'
import Row from '@/components/pages/account/Row'
import { useRouter } from 'next/router'
import Subtitle from '@/components/utils/Subtitle'
import Link from 'next/link'
import AccountLayout from '@/components/layouts/AccountLayout'
import { fetchAPIWithToken } from '@/lib/api'
import Image from 'next/image'

export const Exercice = ({ title, time, image }) => {
  return (
    <div className="flex items-center gap-4 lg:gap-10">
      <div className="relative min-h-[4.5rem] min-w-[4.5rem] overflow-hidden rounded bg-dark-100 lg:h-36 lg:w-36 lg:rounded-lg">
        <Image src={image} layout="fill" alt="banner" />
      </div>
      <div className="flex flex-col gap-1 lg:gap-3">
        <h2 className="font-head text-md font-semibold text-dark-900 lg:text-xl lg:font-bold">
          {title}
        </h2>
        <span className="font-body text-xs text-dark-500 lg:text-lg">
          {time}
        </span>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ req, query }) => {
  if (!req.cookies.jwt) {
    return {
      redirect: {
        destination: '/connexion',
        permanent: true,
      },
    }
  }
  const workouts = await fetchAPIWithToken(
    `/workouts`,
    req.cookies.jwt,
    false,
    ['tags', 'series']
  )

  const workout = workouts.data.find((workout) => {
    return workout.id === parseInt(query.id)
  })

  return { props: { workout: workout.attributes } }
}

const SessionsNewTrainings1 = ({ workout }) => {
  const router = useRouter()

  const isMediumScreen = useMediaQuery('(min-width: 768px)')

  console.log(workout)

  return (
    <div className="mt-20 min-h-[calc(100vh_-_165px)] py-5 pb-10 md:py-16">
      <div className="px-6 md:px-24" onClick={() => router.back()}>
        <Cta arrow="left" type="secondary" size={isMediumScreen ? 'l' : 'm'}>
          Retour
        </Cta>
      </div>
      <div className="px-6 md:px-24">
        <div className="mt-6 flex max-w-3xl flex-col gap-3 lg:gap-4">
          <Title type="1">{workout.name}</Title>
          <Subtitle type="3" html={false}>
            {workout.duration} min - {workout.level} -{' '}
            {workout.tags.data[0].attributes.name}
          </Subtitle>
        </div>
        <iframe
          className="mt-8 aspect-video w-full lg:mt-12"
          src={workout.videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {workout.series?.length > 0 ? (
        <div className="mx-auto max-w-6xl px-6 md:px-24">
          <h2 className="mt-10 font-head text-[1.25rem] font-semibold text-dark-900 lg:mb-2 lg:mt-16 lg:text-3xl lg:font-bold">
            Programme de la séance
          </h2>
          <div className="space-y-10 lg:space-y-16">
            {workout.series.map((serie, i) => {
              console.log(serie)
              return (
                <div key={i}>
                  <Subtitle type="3" html={false}>
                    Série {i + 1} sur {workout.series.length}
                  </Subtitle>
                  <div className="mt-4 space-y-4 lg:mt-6 lg:space-y-8">
                    {serie.exercises.map((exercise) => {
                      return (
                        <Exercice
                          key={exercise.id}
                          title={exercise.name}
                          time={`${exercise.durationMinutes} minute${
                            exercise.durationMinutes > 1 ? 's' : ''
                          }`}
                          image={'/bg-card.png'}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}
      {/* {otherExercices.length > 0 ? (
        <div className="mt-12 lg:mt-28">
          <Row title="Découvrez d'autres séances" button={false}>
            {otherExercices.map((item) => {
              console.log(item)
              return (
                <Link
                  key={item.id}
                  href={`/compte/seances/toutes-les-seances/[id]`}
                  as={`/compte/seances/toutes-les-seances/${item.id}`}
                  passHref
                >
                  <a>
                    <Card
                      tagType={item.tags.name}
                      title={item.name}
                      type="séances"
                      duration={item.duration}
                      level={item.level}
                      bg={
                        item.image?.url
                          ? process.env.NEXT_PUBLIC_STRAPI_API_URL +
                            item.image?.url
                          : '/bg-card.png'
                      }
                    />
                  </a>
                </Link>
              )
            })}
          </Row>
        </div>
      ) : null} */}
    </div>
  )
}

SessionsNewTrainings1.Layout = AccountLayout

export default SessionsNewTrainings1
