export const formatFileName = (name: string) => name.trim()

export const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-IN').format(new Date(date))
