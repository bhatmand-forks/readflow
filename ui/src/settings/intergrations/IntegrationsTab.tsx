import React from 'react'

import { Panel } from '../../components'
import { usePageTitle } from '../../hooks'
import FeedpushrSection from './feedpushr/FeedpushrSection'
import IncomingWebhookSection from './incoming-webhook/IncomingWebhookSection'
import OutgoingWebhookSection from './outgoing-webhook/OutgoingWebhookSection'

const IntegrationTab = () => {
  usePageTitle('Settings - Integrations')

  return (
    <Panel>
      <FeedpushrSection />
      <IncomingWebhookSection />
      <OutgoingWebhookSection />
    </Panel>
  )
}

export default IntegrationTab
