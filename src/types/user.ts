export type User = {
  id: string
  name: string
  email: string
  role: Role
  departmentId?: string
  clearance?: ClearanceLevel
}
