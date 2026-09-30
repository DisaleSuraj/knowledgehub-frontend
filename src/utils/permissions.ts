import type { Role } from '../types/role'

export const canManageUsers = (role: Role) => role === 'SUPER_ADMIN'

export const canApproveDocuments = (role: Role) =>
  role === 'SUPER_ADMIN' || role === 'DEPARTMENT_MANAGER'
