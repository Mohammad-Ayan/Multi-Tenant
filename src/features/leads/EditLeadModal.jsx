import { useState } from 'react'


export default function EditLeadModal({ lead, onClose, onSave }) {
    const [status, setStatus] = useState(lead.status)


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-sm rounded-lg bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold">Edit Lead Status</h3>


                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mb-4 w-full rounded border px-3 py-2"
                >
                    <option>Open</option>
                    <option>Contacted</option>
                    <option>Converted</option>
                    <option>Lost</option>
                </select>


                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 text-sm">
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(status)}
                        className="rounded bg-blue-600 px-4 py-2 text-sm text-white"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}