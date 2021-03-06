import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { fetchAPI } from '@/lib/api'
import { useState } from 'react'
import { LinksContext } from '@/contexts/LinksContext'
import { AuthContext } from '@/contexts/AuthContext'

export const getServerSideProps = async ({ req }) => {
  // if (!req.cookies.jwt) {
  //   return {
  //     redirect: {
  //       destination: '/paiement/compte',
  //       permanent: true,
  //     },
  //   }
  // }

  const subscriptions = await fetchAPI('/content/subscriptions', [
    'subscriptions',
  ])

  return {
    props: {
      subscriptions: subscriptions.subscriptions,
    },
  }
}

const Checkout = ({ subscriptions }) => {
  const router = useRouter()

  const { getPage, checkoutPages } = useContext(LinksContext)

  useEffect(() => {
    let activeStep = window.localStorage.getItem(
      'vitaliplay.checkout.activeStep'
    )

    if (!activeStep) {
      window.localStorage.setItem('vitaliplay.checkout.activeStep', '1')
      activeStep = window.localStorage.getItem('vitaliplay.checkout.activeStep')
    }

    if (!window.localStorage.getItem('vitaliplay.checkout.store')) {
      window.localStorage.setItem(
        'vitaliplay.checkout.store',
        JSON.stringify({})
      )
    }

    window.localStorage.setItem(
      'vitaliplay.checkout.subscription',
      JSON.stringify({
        subscription: subscriptions.find(
          (subscription) =>
            subscription.subscriptionType === router.query.abonnement
        ),
      })
    )

    router.push(getPage(checkoutPages, 'id', parseInt(activeStep)).path)
  }, [])

  return <></>
}

export default Checkout
