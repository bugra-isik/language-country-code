import { countryToLanguageCode } from "./countryToLanguageCode";
import { languageToCountryCode } from "./languageToCountryCode";

export function getCountryCode(languageCode: string): string {
  return (
    languageToCountryCode[languageCode as keyof typeof languageToCountryCode] ||
    languageCode.toUpperCase()
  )
}

export function getLanguageCode(countryCode: string): string {
  return (
    countryToLanguageCode[
      countryCode as keyof typeof countryToLanguageCode
    ]?.[0] || countryCode.toLowerCase()
  )
}
