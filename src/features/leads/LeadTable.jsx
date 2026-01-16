import { useAuthStore } from '../../stores/auth.store'


const STATUS_STYLES = {
    Open: 'bg-blue-100 text-blue-700',
    Contacted: 'bg-yellow-100 text-yellow-700',
    Converted: 'bg-green-100 text-green-700',
    Lost: 'bg-red-100 text-red-700',
}



export default function LeadTable({ leads, onEdit }) {
    const { user } = useAuthStore()


    if (!leads.length) {
        return (
            <div className="rounded-lg border bg-white p-10 text-center text-sm text-gray-500">
                No leads for this organization
            </div>
        )
    }


    return (
        <div className="overflow-hidden rounded-lg border bg-white">
            <table className="w-full">
                <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Phone</th>
                        <th className="px-6 py-3">Status</th>
                        {user.role === 'Admin' && <th className="px-6 py-3">Action</th>}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                    {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 font-medium">{lead.name}</td>
                            <td className="px-6 py-4">{lead.phone}</td>
                            <td className="px-6 py-4">
                                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[lead.status]}`}>
                                    {lead.status}
                                </span>
                            </td>
                            {user.role === 'Admin' && (
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => onEdit(lead)}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                    >
                                        Edit
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}