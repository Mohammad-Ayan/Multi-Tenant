import { useAuthStore } from '../../stores/auth.store'


export default function SettingsPage() {
const { user } = useAuthStore()


return (
<div className="max-w-2xl space-y-6">
<div>
<h2 className="text-2xl font-semibold">Settings</h2>
<p className="text-sm text-gray-500">
Only Admins can access this section
</p>
</div>


<div className="rounded-lg border bg-white p-6">
<h3 className="mb-2 text-sm font-semibold">User Info</h3>
<p className="text-sm">Name: {user.name}</p>
<p className="text-sm">Role: {user.role}</p>
</div>


<div className="rounded-lg border bg-white p-6">
<h3 className="mb-2 text-sm font-semibold">Organization Settings</h3>
<p className="text-sm text-gray-600">
Organization‑level configurations go here.
</p>
</div>
</div>
)
}