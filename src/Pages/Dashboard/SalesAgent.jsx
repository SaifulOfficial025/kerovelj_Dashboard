import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SalesAgent() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <div className="p-6 bg-[#FFF3F0] min-h-screen text-[#F24E1E] font-semibold mb-4">
            {/* Filter Options */}
            <div className="bg-white p-4 rounded shadow mb-4">
                <h2 className="text-[#F24E1E] font-semibold mb-4">Filter Options</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-4 items-end">
  <div className="flex-1 min-w-[200px]">
    <label className="block text-sm mb-1">Sales Agent Name</label>
    <select {...register('username')} className="w-full p-2 border rounded bg-[#FDE5E0]">
      <option value="">Select Agent</option>
      <option value="ABC123">Company ABC</option>
    </select>
  </div>

  <div className="flex-1 min-w-[200px]">
    <label className="block text-sm mb-1">Agent Code</label>
    <select {...register('agentCode')} className="w-full p-2 border rounded bg-[#FDE5E0]">
      <option value="">Select Code</option>
      <option value="400-001">400-001</option>
    </select>
  </div>

  <div className="flex-1 min-w-[200px]">
    <label className="block text-sm mb-1">Agent Group</label>
    <select {...register('agentGroup')} className="w-full p-2 border rounded bg-[#FDE5E0]">
      <option value="">Select Group</option>
      <option value="Group A">Group A</option>
    </select>
  </div>

  <button type="submit" className="bg-[#F24E1E] text-white px-4 py-2 rounded h-fit">Search</button>
</form>

            </div>

            {/* Table Section */}
            <div className="bg-white rounded shadow overflow-x-auto">
                <div className="flex justify-end px-4 py-2">
                    <Link to="/add_new_sales_agent">
                        <button className="flex items-center justify-center bg-[#ffe4df] text-[#f04e24] border border-[#f04e24] px-4 py-2 rounded text-sm">
                            + Add New Sales Agent
                        </button>
                    </Link>


                </div>
                <table className="w-full text-left border-t">
                    <thead className="bg-[#F24E1E] text-white">
                        <tr>
                            <th className="px-4 py-2">Agent Code</th>
                            <th className="px-4 py-2">Sales Agent</th>
                            <th className="px-4 py-2">Agent Group</th>
                            <th className="px-4 py-2">Credit Term</th>
                            <th className="px-4 py-2">Credit Limit</th>
                            <th className="px-4 py-2">Outstanding</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                        {Array(7).fill().map((_, i) => (
                            <tr key={i} className="border-b">
                                <td className="px-4 py-2">400-001</td>
                                <td className="px-4 py-2">Company ABC</td>
                                <td className="px-4 py-2">Group A</td>
                                <td className="px-4 py-2">14 days</td>
                                <td className="px-4 py-2">RM30,000.00</td>
                                <td className="px-4 py-2">RM2,450.34</td>
                                <td className="px-4 py-2 text-blue-500 underline cursor-pointer"> <Link to="/edit_sales_agent">View</Link></td>
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
                    <div>Page 1 of 1 (10 items)</div>
                    <div>
                        <button className="px-2">&#8249;</button>
                        <button className="px-2">&#8250;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesAgent