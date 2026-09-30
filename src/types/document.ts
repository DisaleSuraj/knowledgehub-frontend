export type DocumentStatus = 'DRAFT' | 'PENDING_APPROVAL' | 'PUBLISHED' | 'ARCHIVED'

export type Document = {
  id: string
  title: string
  fileName: string
  departmentId?: string
  clearance: ClearanceLevel
  status: DocumentStatus
  version: number
}
