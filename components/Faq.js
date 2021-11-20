import Button from './Button'

const Faq = ({ question, answer }) => {
  const buttonSize = useResponsiveState(1024, { from: 40, to: 28 })

  const openDropDown = e => {
    e.target.parentElement.nextSibling.classList.toggle('max-h-0')
    e.target.parentElement.nextSibling.classList.toggle('max-h-40')
    e.target.classList.toggle('rotate-45')
  }

  return (
    <div>
      <div className="flex justify-between items-center border-solid border-b-1 px-2 md:px-6 py-4">
        <p className="font-body text-dark-500 font-normal pr-8">{question}</p>
        <div
          onClick={openDropDown}
          className="cursor-pointer transform transition-transform">
          <Button size={buttonSize} />
        </div>
      </div>
      <div className="pt-4 max-h-0 overflow-y-hidden transition-max-h duration-300">
        <p className="font-body text-dark-500 font-normal pr-8">{answer}</p>
      </div>
    </div>
  )
}

export default Faq
