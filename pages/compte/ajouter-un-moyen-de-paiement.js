import Title from '@/components/utils/Title'
import Radio from '@/components/utils/Radio'
import { Mastercard, Visa } from '@/components/utils/Icons'
import Input from '@/components/utils/Input'
import Cta from '@/components/utils/Cta'
import { useFormik } from 'formik'
import { useMediaQuery } from '@mui/material'
import { useRouter } from 'next/router'
import useButtonSize from '@/hooks/useButtonSize'
import { LinksContext } from '@/contexts/LinksContext'
import { useContext } from 'react'
import AccountLayout from '@/components/layouts/AccountLayout'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, useElements, useStripe } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const PaymentForm = () => {
  const { getPage, accountPages } = useContext(LinksContext)

  const router = useRouter()

  const isMediumScreen = useMediaQuery('max-width: 768px')

  const buttonSize = useButtonSize()

  const elements = useElements()
  const stripe = useStripe()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (elements == null) {
      return
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="mt-8 flex flex-wrap gap-x-4 gap-y-4 md:gap-x-6">
            <Radio
              padding="md:px-7 md:py-3"
              center={true}
              type="2"
              id="mastercard"
              name="way"
              checked={formik.values.way === 'mastercard'}
              onChange={formik.handleChange}
            >
              <Mastercard size={isMediumScreen ? '48' : '35'} />
            </Radio>
            <Radio
              padding="md:px-7 md:py-3"
              center={true}
              type="2"
              id="visa"
              name="way"
              checked={formik.values.way === 'visa'}
              onChange={formik.handleChange}
            >
              <Visa size={isMediumScreen ? '48' : '35'} />
            </Radio>
          </div> */}
      <div className="mt-11">
        <div className="xl:grid-area-card-info md:grid-area-card-info grid-area-card-info grid gap-3 gap-x-4 md:gap-y-5">
          <div style={{ gridArea: 'a' }}>
            <Input label="Nom sur la carte" name="name" />
          </div>
          <div style={{ gridArea: 'b' }}>
            <Input label="Numéro de carte" name="cardNumber" />
          </div>
          <div style={{ gridArea: 'c' }}>
            <Input
              label="Date d'expiration"
              name="expires"
              placeholder="ex. 07/23"
            />
          </div>
          <div style={{ gridArea: 'd' }}>
            <Input label="CVV" name="cvv" />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4 md:gap-6 lg:mt-12">
          <div
          // onClick={() =>
          //   router.push(
          //     `${
          //       getPage(accountPages, 'pageName', 'Profil').path
          //     }/mes-cartes-et-factures`
          //   )
          // }
          >
            <Cta size={buttonSize} buttonType="submit">
              Enregistrer
            </Cta>
          </div>

          <div onClick={() => router.back()}>
            <Cta size={buttonSize} type="secondary">
              Retour
            </Cta>
          </div>
        </div>
      </div>
    </form>
  )
}

const AddPaymentWay = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="mx-auto mt-20 min-h-[calc(100vh_-_165px)] max-w-4xl px-6 py-10 md:px-24 lg:py-20">
        <Title type="3">Ajouter un moyen de paiement</Title>
        <PaymentForm />
      </div>
    </Elements>
  )
}

AddPaymentWay.Layout = AccountLayout

export default AddPaymentWay
