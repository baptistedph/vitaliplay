import { useState, useEffect } from 'react'
import { ChevronRight } from '../../utils/Icons'
import PropTypes from 'prop-types'

const CardPreview = ({
  title = 'This is a card preview',
  duration = '5',
  level = 'Intermédiaire',
  type = '1',
}) => {
  const [color, setColor] = useState('border-light-100')

  useEffect(() => {
    switch (type) {
      case '1':
        setColor('border-orange-900')
        break
      case '2':
        setColor('border-green-900')
        break
      case '3':
        setColor('border-yellow-900')
        break
      case '4':
        setColor('border-blue-900')
        break
      default:
        break
    }
  }, [type])

  return (
    <div
      className={`${color} min-w-[250px] relative items-center border-solid border-l-8 font-body font-bold px-4 py-4 rounded-lg bg-light-100 shadow-level1`}>
      <h3 className="font-head font-bold text-dark-900 text-lg leading-6 w-2/3">
        {title}
      </h3>
      <p className="text-dark-500 mt-2 text-sm font-normal">
        {duration} min - {level}
      </p>
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
        <ChevronRight size={30} color="#727272" />
      </div>
    </div>
  )
}

CardPreview.propTypes = {
  title: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string,
  type: PropTypes.oneOf(['1', '2', '3', '4']),
}

export default CardPreview
