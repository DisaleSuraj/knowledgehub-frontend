export type AuthState = {
  isAuthenticated: boolean
  role: string | null
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  role: null,
}
