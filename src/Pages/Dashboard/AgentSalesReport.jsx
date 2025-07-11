import React from 'react';
import { useForm } from 'react-hook-form';
import { TiExport } from "react-icons/ti";

function AgentSalesReport() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-6 bg-[#FFF3F0] min-h-screen">
      {/* Filter Options */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-[#F24E1E] font-semibold mb-4">Filter Options</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Date Range */}
          <div className="col-span-1">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Date Range</label>
            <div className="flex items-center space-x-2">
              <input type="date" {...register('startDate')} className="w-full p-2 border rounded bg-[#FDE5E0]" />
              <span className="text-[#F24E1E]">to</span>
              <input type="date" {...register('endDate')} className="w-full p-2 border rounded bg-[#FDE5E0]" />
            </div>
          </div>

          {/* Sales Agent */}
          <div className="col-span-1 mt-0.5">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Sales Agent</label>
            <select {...register('salesAgent')} className="w-full p-2 border rounded bg-[#FDE5E0]">
              <option value="">Select Agent</option>
              <option value="Company ABC">Company ABC</option>
            </select>
          </div>

          {/* Agent Code */}
          <div className="col-span-1 mt-0.5">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Agent Code</label>
            <select {...register('agentCode')} className="w-full p-2 border rounded bg-[#FDE5E0]">
              <option value="">Select Code</option>
              <option value="400-001">400-001</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="col-span-1 flex items-center mt-5">
            <button type="submit" className="bg-[#F24E1E] text-white px-4 py-2 rounded w-full">Search</button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="mt-6 bg-white rounded shadow overflow-x-auto">
        <div className="flex justify-end px-4 py-2">
          <button className="flex items-center justify-center bg-[#ffe4df] text-[#f04e24] border border-[#f04e24] px-4 py-2 rounded text-sm">Export <TiExport /></button>

        </div>
        <table className="w-full text-left border-t">
          <thead className="bg-[#F24E1E] text-white">
            <tr>
              <th className="px-4 py-2">Doc.No</th>
              <th className="px-4 py-2">Agent Code</th>
              <th className="px-4 py-2">Sales Agent</th>
              <th className="px-4 py-2">Total Order</th>
              <th className="px-4 py-2">Total Qty</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {Array(7).fill().map((_, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">SO-000034</td>
                <td className="px-4 py-2">400-001</td>
                <td className="px-4 py-2">Company ABC</td>
                <td className="px-4 py-2">{[34, 345, 22, 4, 2, 5, 22][i]}</td>
                <td className="px-4 py-2">{[34, 1055, 1055, 1055, 1055, 1055, 34][i]}</td>
                <td className="px-4 py-2">RM2,450.34</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 text-sm">
          <div>
            <select className="border rounded p-1">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
          <div>
            Page 1 of 1 (10 items)
          </div>
          <div>
            <button className="px-2">&#8249;</button>
            <button className="px-2">&#8250;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentSalesReport;
