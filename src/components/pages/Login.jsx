import { useState } from 'react'
import { useAuthStore } from '../../stores/auth.store'


export default function Login() {
    const login = useAuthStore((s) => s.login)


    const [name, setName] = useState('Amina Akhtar')
    const [role, setRole] = useState('Admin')
    const [tenantId, setTenantId] = useState('orgA')


    function handleSubmit(e) {
        e.preventDefault()
        login({ name, role, tenantId })
    }


    return (
        <div className="flex h-screen items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm space-y-4 rounded-lg border bg-white p-6"
            >
                <h1 className="text-xl font-semibold">SalesDesk Login</h1>


                <input
                    className="w-full rounded border px-3 py-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                />


                <select
                    className="w-full rounded border px-3 py-2"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="Admin">Admin</option>
                    <option value="Agent">Agent</option>
                </select>


                <select
                    className="w-full rounded border px-3 py-2"
                    value={tenantId}
                    onChange={(e) => setTenantId(e.target.value)}
                >
                    <option value="orgA">Organization A</option>
                    <option value="orgB">Organization B</option>
                </select>


                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 text-white"
                >
                    Login
                </button>
            </form>
        </div>
    )
}