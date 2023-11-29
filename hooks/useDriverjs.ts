import { useOnPageLoad } from '@/hooks'
import { type ILocalSteps } from '@/models'
import { DriverManager } from '@/utils/driverjs.util'
import { type DriveStep } from 'driver.js'
import { useEffect, useRef } from 'react'

export const useDriverjs = (globalSteps: DriveStep[], localSteps: ILocalSteps[]) => {
  const driverInstance = useRef<DriverManager | undefined>()

  useEffect(() => {
    driverInstance.current = new DriverManager(globalSteps, localSteps)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useOnPageLoad(() => {
    driverInstance.current?.showSteps()
  })
}
