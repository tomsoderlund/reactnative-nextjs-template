/*
  yarn add @bothrs/expo-mixpanel-analytics expo-secure-store react-native-get-random-values uuid

  Usage:
    import { AnalyticsContextProvider } from '../hooks/useAnalytics'
    <AnalyticsContextProvider>
      <ComponentThatUsesAnalytics />
    </AnalyticsContextProvider>

  and inside ComponentThatUsesAnalytics:

    import { useAnalytics, AppEventType } from '../hooks/useAnalytics'
    const { trackEvent } = useAnalytics()
    trackEvent?.(AppEventType.DoSomething, { myData })
    // To avoid multiple events:
    useEffect(() => trackEvent?.(AppEventType.ShowUserProfileEditScreen), [])
*/

import React, { createContext, useContext, useEffect } from 'react'
import ExpoMixpanelAnalytics from '@bothrs/expo-mixpanel-analytics'

import config from '../config/config'
import { makeRestRequest } from '../lib/makeRestRequest'
import useUniqueDeviceID from './useUniqueDeviceID'

export enum AppEventType {
  // Core loop
  DoSomething = 'do_something',
  // Settings
  ShowSettings = 'show_settings'
}

interface AnalyticsInputProps {
  children: React.ReactNode
}

interface AnalyticsReturnProps {
  trackEvent: (event: AppEventType, properties?: Record<string, any>) => void
  notifySlackEvent: (event: AppEventType, properties?: Record<string, any>) => Promise<void>
}

const AnalyticsContext = createContext<Partial<AnalyticsReturnProps>>({})

export const AnalyticsContextProvider = (props: AnalyticsInputProps): React.ReactElement => {
  const mixpanel = new ExpoMixpanelAnalytics(config.mixpanelProjectToken ?? '')

  const uniqueDeviceID = useUniqueDeviceID()

  useEffect(() => {
    if (uniqueDeviceID !== undefined) {
      if (__DEV__) console.log('mixpanel.identify', uniqueDeviceID)
      void mixpanel.identify(uniqueDeviceID)
    }
  }, [uniqueDeviceID])

  /*
  useEffect(() => {
    if (session?.user?.id !== undefined) {
      if (__DEV__) console.log('mixpanel.people_set', { user_id: userProfile?.username })
      void mixpanel.people_set({ user_id: userProfile?.username })
      // TODO: add mixpanel.alias(session?.user?.id, uniqueDeviceID)
    }
  }, [session?.user?.id])
  */

  // ----- App Events -----

  const trackEvent = (eventType: AppEventType, properties?: Record<string, any>): void => {
    const propertiesWithDistinctId = { ...properties, distinct_id: uniqueDeviceID }
    if (__DEV__) {
      console.log('trackEvent', eventType, propertiesWithDistinctId)
    } else {
      mixpanel.track(eventType, propertiesWithDistinctId)
    }
  }

  // ----- Slack notifications -----

  const notifySlackEvent = async (eventType: AppEventType, properties?: Record<string, any>): Promise<void> => {
    if (__DEV__) {
      console.log('notifySlackEvent', eventType, properties)
    } else {
      void makeRestRequest('POST', `events/${eventType}`, properties /* session?.access_token */)
    }
  }

  // Make the context object (i.e. the “API” for Analytics)
  const analyticsContext: AnalyticsReturnProps = {
    trackEvent,

    notifySlackEvent
  }

  // Pass the value in Provider and return
  return (
    <AnalyticsContext.Provider value={analyticsContext}>
      {props.children}
    </AnalyticsContext.Provider>
  )
}

export const { Consumer: AnalyticsContextConsumer } = AnalyticsContext

export const useAnalytics = (): Partial<AnalyticsReturnProps> => useContext(AnalyticsContext)
