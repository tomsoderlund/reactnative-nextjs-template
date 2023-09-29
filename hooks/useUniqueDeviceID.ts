/*
  From: https://stackoverflow.com/a/68553627/449227

  import useUniqueDeviceID from '../../hooks/useUniqueDeviceID'
  const uniqueDeviceID = useUniqueDeviceID()
*/

import { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const STORAGE_KEY_UNIQUE_DEVICE_ID = 'uniqueDeviceID'

export default function useUniqueDeviceID (): string | undefined {
  const [uniqueDeviceID, setUniqueDeviceID] = useState<string>()

  useEffect(() => {
    async function getUniqueDeviceID (): Promise<void> {
      const fetchUUID = await SecureStore.getItemAsync(STORAGE_KEY_UNIQUE_DEVICE_ID)
      if (fetchUUID !== null) {
        setUniqueDeviceID(JSON.parse(fetchUUID))
      } else {
        const newUUID = uuidv4()
        await SecureStore.setItemAsync(STORAGE_KEY_UNIQUE_DEVICE_ID, JSON.stringify(newUUID))
        setUniqueDeviceID(newUUID)
      }
    }
    void getUniqueDeviceID()
  }, [])

  return uniqueDeviceID
}
