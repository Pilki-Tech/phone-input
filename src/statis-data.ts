export interface ValidateReturnParams {
  countryCallingCode: string
  nationalNumber: string
  number: string
  country: { name: string, iso2: string, dialCode: string },
  countryCode: string
  valid: boolean
  formatted: string
}
