import Title from '@/components/utils/Title'
import Subtitle from '@/components/utils/Subtitle'
import Input from '@/components/utils/Input'
import { useFormik } from 'formik'
import Dropdown from '@/components/utils/Dropdown'
import { useState, useContext } from 'react'
import Cta from '@/components/utils/Cta'
import Link from 'next/link'
import { LinksContext } from '@/contexts/LinksContext'
import SignupSchema from '@/schemas/SignupSchema'
import LoginLayout from '@/components/layouts/LoginLayout'
import { useRouter } from 'next/router'
import useButtonSize from '@/hooks/useButtonSize'

const SignupStart = () => {
  const [civility, setCivility] = useState('M')

  const { getPathByPage } = useContext(LinksContext)

  const router = useRouter()

  const buttonSize = useButtonSize()

  const formatDate = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      address: '',
      zipCode: '',
      birthday: formatDate(new Date()),
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,

    onSubmit: values => {
      router.push(`${router.route}/confirm`)
    },
  })

  return (
    <div className="h-full lg:pt-20 xl:max-w-3xl">
      <Title>Inscription</Title>
      <div className="mt-4">
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida eget
          varius a diam faucibus nec sodales fermentum eget.
        </Subtitle>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col lg:grid lg:grid-area-signup mt-8 lg:mt-10 gap-3 lg:gap-4">
        <div className="self-start" style={{ gridArea: 'a' }}>
          <Dropdown
            options={['M', 'Mme']}
            label="Civilité"
            defaultOption={civility}
            getOption={setCivility}
          />
        </div>
        <div style={{ gridArea: 'b' }}>
          <Input
            label="Nom"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
        <div style={{ gridArea: 'c' }}>
          <Input
            label="Prénom"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div style={{ gridArea: 'd' }}>
          <Input
            label="Adresse"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            error={formik.touched.address && formik.errors.address}
          />
        </div>
        <div className="gap-4 flex" style={{ gridArea: 'e' }}>
          <div className="flex-1">
            <Input
              label="Code Postal"
              name="zipCode"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
              error={formik.touched.zipCode && formik.errors.zipCode}
            />
          </div>
          <div className="flex-1">
            <Input
              label="Date de naissance"
              name="birthday"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.birthday}
              error={formik.touched.birthday && formik.errors.birthday}
            />
          </div>
        </div>
        <div style={{ gridArea: 'f' }}>
          <Input
            label="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
        </div>
        <div style={{ gridArea: 'g' }}>
          <Input
            label="Téléphone"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            prefix="(+ 33)"
            error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
        </div>
        <div style={{ gridArea: 'h' }}>
          <Input
            label="Mot de passe"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
          />
        </div>
        <div style={{ gridArea: 'i' }}>
          <Input
            label="Confirmation mot de passe"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>
        <div
          className="flex flex-wrap gap-4 lg:gap-8 mt-10"
          style={{ gridArea: 'j' }}>
          <div>
            <Cta type="primary" buttonType="submit" size={buttonSize}>
              S'inscrire
            </Cta>
          </div>

          <Link href={getPathByPage('Connexion')} passHref>
            <a>
              <Cta type="secondary" size={buttonSize}>
                Se connecter
              </Cta>
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

SignupStart.Layout = LoginLayout

export default SignupStart
