import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useOnPageLoad = (callback: () => unknown) => {
  const location = useLocation()
  useEffect(() => {
    callback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
}
