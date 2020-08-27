import defaultSettings from '@/settings'

const title = defaultSettings.title || 'PMP'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
