import { useState } from 'react'
import { useAuthStore } from '../../stores/auth.store'
import { useLeads } from './useLeads'
import LeadTable from './LeadTable'

/**
 * LeadsPage
 * - Tenant-aware
 * - Role-aware (Admin / Agent)
 * - Modern SaaS UX
 */
export default function LeadsPage() {
  const { user } = useAuthStore()
  const { leads, filter, setFilter, updateLeadStatus } = useLeads()

  const [editingLead, setEditingLead] = useState(null)
  const [newStatus, setNewStatus] = useState('Open')

  function openEditModal(lead) {
    setEditingLead(lead)
    setNewStatus(lead.status)
  }

  function closeEditModal() {
    setEditingLead(null)
  }

  function saveStatus() {
    updateLeadStatus(editingLead.id, newStatus)
    closeEditModal()
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Leads</h2>
          <p className="text-sm text-gray-500">
            Manage and track your sales leads
          </p>
        </div>

        {/* Status Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>
      </div>

      {/* Leads Table */}
      <LeadTable
        leads={leads}
        onEdit={user.role === 'Admin' ? openEditModal : null}
      />

      {/* Edit Lead Status Modal (Admin Only) */}
      {editingLead && user.role === 'Admin' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-lg bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold">
              Edit Lead Status
            </h3>

            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="mb-6 w-full rounded-md border px-3 py-2 text-sm"
            >
              <option value="Open">Open</option>
              <option value="Contacted">Contacted</option>
              <option value="Converted">Converted</option>
              <option value="Lost">Lost</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={closeEditModal}
                className="rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={saveStatus}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
