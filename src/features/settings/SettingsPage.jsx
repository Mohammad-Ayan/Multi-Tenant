import { useState } from 'react'
import { ShieldCheck, Building2, User } from 'lucide-react'
import { useAuthStore } from '../../stores/auth.store'

export default function SettingsPage() {
    const { user } = useAuthStore()
    const [showPermissions, setShowPermissions] = useState(false)

    const permissions =
        user.role === 'Admin'
            ? [
                'View all leads',
                'Edit lead status',
                'View call logs',
                'Switch organizations',
                'Access settings',
            ]
            : [
                'View leads',
                'Filter leads',
                'View call logs',
            ]

    return (
        <div className="max-w-3xl space-y-8">
            {/* Page Header */}
            <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                    Settings
                </h2>
                <p className="text-sm text-gray-500">
                    Manage user and organization configuration
                </p>
            </div>

            {/* User Settings */}
            <div className="rounded-lg border bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                    <User size={18} className="text-blue-600" />
                    <h3 className="text-sm font-semibold text-gray-900">
                        User Information
                    </h3>
                </div>

                <div className="space-y-2 text-sm">
                    <p>
                        <span className="font-medium text-gray-700">Name:</span>{' '}
                        {user.name}
                    </p>

                    <p className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">Role:</span>

                        {/* Clickable Role Badge */}
                        <button
                            onClick={() => setShowPermissions(!showPermissions)}
                            className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 hover:bg-blue-200 transition"
                        >
                            <ShieldCheck size={12} />
                            {user.role}
                        </button>
                    </p>

                    {/* Permissions */}
                    {showPermissions && (
                        <div className="mt-3 rounded-md border bg-gray-50 p-4">
                            <p className="mb-2 text-xs font-semibold text-gray-600">
                                Permissions
                            </p>
                            <ul className="list-disc space-y-1 pl-4 text-xs text-gray-600">
                                {permissions.map((perm) => (
                                    <li key={perm}>{perm}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Organization Settings */}
            <div className="rounded-lg border bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                    <Building2 size={18} className="text-blue-600" />
                    <h3 className="text-sm font-semibold text-gray-900">
                        Organization
                    </h3>
                </div>

                <div className="space-y-2 text-sm text-gray-700">
                    <p>
                        <span className="font-medium">Active Organization:</span>{' '}
                        {user.tenantId === 'orgA'
                            ? 'Organization A'
                            : 'Organization B'}
                    </p>

                    <p className="text-xs text-gray-500">
                        Organization-level configurations and preferences
                        would be managed here in a real application.
                    </p>
                </div>
            </div>
        </div>
    )
}
