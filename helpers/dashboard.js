/**
 * @param {Function} getValue 
 * @param {'asc' | 'desc'} sortOrder 
 * @returns 
 */
export const dashboardSorter = (getValue, sortOrder = 'asc') => (dashboard1, dashboard2) => (sortOrder === 'desc' ? -1 : 1) * (getValue(dashboard1) - getValue(dashboard2))

export const getCreationDate = dashboard => new Date(dashboard?.attributes?.createdAt).getTime()
