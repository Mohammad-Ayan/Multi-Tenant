import { formatDateTime, formatDuration } from '../../utils/format'

const outcomeColors = {
    Connected: 'bg-green-100 text-green-700',
    Missed: 'bg-red-100 text-red-700',
    'Follow-up': 'bg-yellow-100 text-yellow-700',
}

export default function CallTable({ calls }) {
    if (!calls.length) {
        return (
            <div className="rounded-lg border bg-white p-10 text-center text-sm text-gray-500">
                No call logs for this tenant
            </div>
        )
    }

    return (
        <div className="overflow-hidden rounded-lg border bg-white">
            <table className="w-full">
                <thead className="bg-gray-50 text-left text-xs font-semibold text-gray-500">
                    <tr>
                        <th className="px-6 py-3">Lead</th>
                        <th className="px-6 py-3">Date & Time</th>
                        <th className="px-6 py-3">Duration</th>
                        <th className="px-6 py-3">Outcome</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                    {calls.map((call) => (
                        <tr key={call.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 font-medium">{call.leadName}</td>

                            <td className="px-6 py-4 text-sm text-gray-600">
                                {formatDateTime(call.dateTime)}
                            </td>

                            <td className="px-6 py-4">
                                {formatDuration(call.duration)}
                            </td>

                            <td className="px-6 py-4">
                                <span
                                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${outcomeColors[call.outcome] ||
                                        'bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {call.outcome}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
