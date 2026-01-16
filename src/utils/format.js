// src/utils/format.js

export function formatDateTime(iso) {
  const date = new Date(iso)
  return date.toLocaleString()
}

export function formatDuration(seconds) {
  if (!seconds) return '—'

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return `${mins}m ${secs}s`
}
