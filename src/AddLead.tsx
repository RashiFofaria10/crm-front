export default function AddLead() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Add Lead
        </h1>

        <p className="text-slate-500 mb-6">
          Create a new lead
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Lead Name"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border rounded-xl p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            placeholder="Source"
            className="border rounded-xl p-3"
          />

          <textarea
            placeholder="Notes"
            className="border rounded-xl p-3 md:col-span-2"
            rows={4}
          />

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
            >
              Save Lead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
