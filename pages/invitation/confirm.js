import Title from '@/components/utils/Title'
import Subtitle from '@/components/utils/Subtitle'
import LoginLayout from '@/components/layouts/LoginLayout'
import Cta from '@/components/utils/Cta'
import useButtonSize from '@/hooks/useButtonSize'
import Link from 'next/link'
import { useContext } from 'react'
import { LinksContext } from '@/contexts/LinksContext'
import { Congrats } from '@/components/utils/Icons'
import useCongratsSize from '@/hooks/useCongratsSize'

const InvitationConfirm = () => {
  const buttonSize = useButtonSize()
  const congratsSize = useCongratsSize()

  const { getPathByPage } = useContext(LinksContext)

  return (
    <div className="absolute left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center px-6 md:px-24 lg:max-w-3xl">
      <div className="mb-6 lg:mb-10">
        <Congrats size={congratsSize} />
      </div>
      <Title center={true} type="3">
        Bienvenue parmis nous !
      </Title>
      <div className="mt-4">
        <Subtitle center={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida eget
          varius a diam faucibus nec sodales fermentum eget.
        </Subtitle>
      </div>
      <div className="mt-8 lg:mt-12">
        <Link href={getPathByPage('Questionnaire')}>
          <a>
            <Cta size={buttonSize} type="primary">
              Compléter mon profil
            </Cta>
          </a>
        </Link>
      </div>
    </div>
  )
}

InvitationConfirm.Layout = LoginLayout

export default InvitationConfirm
