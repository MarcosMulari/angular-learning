import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '754650532845-j6s97v6bam966hkf39nd5g8ajnfcu4k0.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
