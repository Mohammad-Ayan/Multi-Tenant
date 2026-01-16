import CallTable from './CallTable'
import { useCalls } from './useCalls'

export default function CallsPage() {
    const { calls } = useCalls()

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                    Call Logs
                </h2>
                <p className="text-sm text-gray-500">
                    History of calls made to your leads
                </p>
            </div>

            <CallTable calls={calls} />
        </div>
    )
}
