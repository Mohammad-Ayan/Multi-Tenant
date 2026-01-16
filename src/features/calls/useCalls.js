import { useMemo } from 'react'
import { callsByTenant } from './calls.mock'
import { useAuthStore } from '../../stores/auth.store'

export function useCalls() {
  const { user } = useAuthStore()

  const calls = useMemo(() => {
    return callsByTenant[user.tenantId] || []
  }, [user.tenantId])

  return { calls }
}
