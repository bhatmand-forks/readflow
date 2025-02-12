import React, { FC } from 'react'
import { AuthProvider } from './AuthProvider'

import { AuthenticatedPage } from './AuthenticatedPage'
import { AUTHORITY } from '../constants'
import { useOnlineStatus } from '../hooks'

const AuthenticationProvider: FC = ({ children }) => {
  const offline = !useOnlineStatus()
  const disabled = AUTHORITY === 'mock'
  if (disabled || offline) {
    return <>{children}</>
  }
  return (
    <AuthProvider>
      <AuthenticatedPage>{children}</AuthenticatedPage>
    </AuthProvider>
  )
}

export { AuthenticationProvider }
