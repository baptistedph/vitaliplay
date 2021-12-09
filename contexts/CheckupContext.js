import { createContext, useState, useEffect } from 'react'

export const CheckupContext = createContext()

export const CheckupContextProvider = ({ children }) => {
  const [store, setStore] = useState({})
  const [prefix] = useState('/checkup')

  const [checkupSteps] = useState([
    {
      id: 1,
      step: 'Bilan physique',
      path: '/physical',
      subSteps: [
        {
          id: 1,
          step: 'Force',
          path: '/strength',
        },
        {
          id: 2,
          step: 'Souplesse',
          path: '/flexibility',
        },
        {
          id: 3,
          step: 'Endurance',
          path: '/endurance',
        },
        {
          id: 4,
          step: 'Equilibre',
          path: '/balance',
        },
      ],
    },
    {
      id: 2,
      step: 'Bilan bien-être',
      path: '/well-being',
      subSteps: [
        {
          id: 1,
          step: 'Humeur',
          path: '/mood',
        },
        {
          id: 2,
          step: 'Tranquilité',
          path: '/tranquility',
        },
        {
          id: 3,
          step: 'Energie',
          path: '/energy',
        },
        {
          id: 4,
          step: 'Réveil',
          path: '/awakening',
        },
        {
          id: 5,
          step: 'Vie quotidienne',
          path: '/everyday-life',
        },
      ],
    },
    {
      id: 3,
      step: 'Activité quoitidienne',
      path: '/daily-activity',
      subSteps: [
        {
          id: 1,
          step: 'Activité intense',
          path: '/intense-activity',
        },
        {
          id: 2,
          step: 'Activité modérée',
          path: '/moderate-activity',
        },
      ],
    },
  ])

  useEffect(() => {
    if (!window.localStorage.getItem('vitaliplay.checkup.activeStep')) {
      window.localStorage.setItem('vitaliplay.checkup.activeStep', '1')
    }
  }, [])

  const getPathById = id => {
    let path = null

    checkupSteps.map(checkupStep => {
      if (checkupStep.id === id) {
        path = checkupStep.path
      }
    })

    return path
  }

  const getPathByStep = step => {
    let path = null

    checkupSteps.map(checkupStep => {
      if (checkupStep.step === step) {
        path = checkupStep.path
      }
    })

    return path
  }

  const getIdByStep = step => {
    let id = null

    checkupSteps.map(checkupStep => {
      if (checkupStep.step === step) {
        id = checkupStep.id
      }
    })

    return id
  }

  const getIdByPath = path => {
    let id = null

    checkupSteps.map(checkupStep => {
      if (checkupStep.path === path) {
        id = checkupStep.id
      }
    })

    return id
  }

  return (
    <CheckupContext.Provider
      value={{
        store,
        setStore,
        prefix,
        getPathById,
        getIdByStep,
        getIdByPath,
        getPathByStep,
        checkupSteps,
      }}>
      {children}
    </CheckupContext.Provider>
  )
}