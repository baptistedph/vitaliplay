import Radio from '@/components/utils/Radio'
import { Mastercard, Visa } from '@/components/utils/Icons'
import { useMediaQuery } from '@mui/material'

const CreditCardInfo = ({
  id,
  name,
  checked,
  onChange,
  cardType = 'mastercard',
  last4,
  cardName,
  expMonth,
  expYear,
}) => {
  const isMediumScreen = useMediaQuery('(min-width: 768px)')

  return (
    <Radio id={id} name={name} onChange={onChange} checked={checked}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-6">
          {cardType === 'mastercard' ? (
            <Mastercard size={isMediumScreen ? '54px' : '36px'} />
          ) : (
            <Visa size={isMediumScreen ? '54px' : '36px'} />
          )}
          <div>
            <h3 className="font-body text-sm font-bold text-blue-900 md:text-md">
              **** **** **** {last4}
            </h3>
            <h4 className="mt-0.5 font-body text-xs font-normal text-dark-500 md:mt-0">
              {cardName}
            </h4>
          </div>
        </div>
        <span className="font-body text-sm font-bold text-blue-900 md:text-md">
          {expMonth.toString().padStart(2, '0')}/{expYear.toString().slice(2)}
        </span>
      </div>
    </Radio>
  )
}

export default CreditCardInfo
