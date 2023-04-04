/*
  import { useI18N } from '../hooks/useI18N'
  const { t } = useI18N()
  <h1>{t('My string')}</h1>
*/

import { useRouter } from 'next/router'

import localeFileEN from '../config/locales/en.json'
// import localeFileSV from '../config/locales/sv.json'

enum Locale {
  EN = 'en',
  // SV = 'sv'
}

const LOCALE_FILES: Record<Locale, any> = {
  [Locale.EN]: localeFileEN
  // [Locale.SV]: localeFileSV
}

// replaceMultipleStrings(['This is $1', 'Sparta']) → 'This is Sparta'
const replaceMultipleStrings = (array: string[], str: string): string => (str ?? array[0]).replace(/(\$\d)/gm, strId => array[parseInt(strId.slice(1))])

export const getTranslation = (stringKeyOrArray: string | string[], locale: Locale): string => {
  const stringKey = Array.isArray(stringKeyOrArray) ? stringKeyOrArray[0] : stringKeyOrArray
  const localeFile = LOCALE_FILES[locale]
  if (localeFile?.[stringKey] === undefined) return stringKey
  return Array.isArray(stringKeyOrArray)
    ? replaceMultipleStrings(stringKeyOrArray, localeFile[stringKey])
    : localeFile[stringKey]
}

type TranslationFunction = (stringKeyOrArray: string) => string

interface I18NReturnProps {
  t: TranslationFunction
}

const useI18N = function useI18N (): I18NReturnProps {
  const { locale } = useRouter()
  const t = (str: string): string => getTranslation(str, locale as Locale)
  return { t }
}

export default useI18N
