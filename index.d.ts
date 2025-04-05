declare module "country-language-code" {
  export function getCountryCode(languageCode: string): string
  export function getLanguageCode(countryCode: string): string
}
