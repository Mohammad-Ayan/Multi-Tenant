import { useMemo, useState, useEffect } from 'react'
import { leadsByTenant } from './leads.mock'
import { useAuthStore } from '../../stores/auth.store'

export function useLeads() {
  const { user } = useAuthStore()
  const [filter, setFilter] = useState('All')

  // ✅ keep tenant leads in state
  const [tenantLeads, setTenantLeads] = useState([])

  // 🔁 update leads when tenant changes
  useEffect(() => {
    setTenantLeads(leadsByTenant[user.tenantId] || [])
  }, [user.tenantId])

  const filteredLeads = useMemo(() => {
    if (filter === 'All') return tenantLeads
    return tenantLeads.filter((l) => l.status === filter)
  }, [tenantLeads, filter])

  // ✅ immutable update (THIS FIXES YOUR BUG)
  function updateLeadStatus(leadId, newStatus) {
    setTenantLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? { ...lead, status: newStatus }
          : lead
      )
    )
  }

  return {
    leads: filteredLeads,
    filter,
    setFilter,
    updateLeadStatus,
  }
}
