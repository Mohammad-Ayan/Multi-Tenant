import { useAuthStore } from '../../stores/auth.store'

const TENANTS = {
  orgA: 'Organization A',
  orgB: 'Organization B',
}

export default function TenantSwitcher() {
  const { user, setTenant } = useAuthStore()

  // Agent → no switch
  if (user.role !== 'Admin') {
    return (
      <span className="text-sm text-gray-600">
        {TENANTS[user.tenantId]}
      </span>
    )
  }

  return (
    <select
      value={user.tenantId}
      onChange={(e) => setTenant(e.target.value)}
      className="rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none px-3 py-1 text-sm"
    >
      {user.allowedTenants.map((tenant) => (
        <option key={tenant} value={tenant}>
          {TENANTS[tenant]}
        </option>
      ))}
    </select>
  )
}

