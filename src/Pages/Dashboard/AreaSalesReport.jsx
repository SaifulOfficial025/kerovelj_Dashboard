import React from 'react';
import { useForm } from 'react-hook-form';
import { TiExport } from 'react-icons/ti';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const topSalesData = [
  { name: '10138 SHOOT CAKE WOLF 12,468 Ctn', value: 12468, color: '#F24E1E' },
  { name: '10138 SHOOT CAKE WOLF 8,468 Ctn', value: 8468, color: '#F57E62' },
  { name: '10138 SHOOT CAKE WOLF 7,468 Ctn', value: 7468, color: '#FBBBA7' },
];

function AreaSalesReport() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-6 bg-[#FFF3F0] min-h-screen text-[#F24E1E] font-semibold mb-4">
      {/* Top 3 Item and Filter Options */}
      <div className="bg-white p-4 rounded shadow grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top 3 Item */}
        <div className="card bg-white shadow-lg md:col-span-1">
          <div className="card-body">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-medium text-[#F04E24] mb-2">Top 3 Sales Item</h2>
                <div className="text-sm text-gray-500">From 1-6 Dec, 2024</div>
              </div>
              {/* <button className=" bg-[#FFE4DF] px-2 rounded-[5px] hover:bg-[#f8d0c8] font-medium py-[4px] text-[14px] hover:cursor-pointer border border-[#F04E24] text-[#F04E24] border-none">View Report</button> */}
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="flex gap-6 items-center">
                <div className="relative">
                  <div className="absolute z-[9999] w-[200px] top-4 left-1/2 transform -translate-x-1/2 bg-[#F04E24] text-white px-3 py-1 rounded text-xs font-medium">
                    10138 SHOOT CAKE WOLF 40%
                  </div>
                  <div className="h-48 w-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={topSalesData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={2}
                          dataKey="value"
                          startAngle={90}
                          endAngle={450}
                        >
                          {topSalesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-3">
                  {topSalesData.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm text-gray-600 whitespace-nowrap">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Options */}
        <div className="md:col-span-2 mt-20">
          <h2 className="text-[#F24E1E] font-semibold mb-4">Filter Options</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Item Code */}
            <input
              type="text"
              placeholder="Item Code"
              {...register('itemCode')}
              className="w-full p-2 border rounded bg-[#FDE5E0]"
            />

            {/* Item Name */}
            <input
              type="text"
              placeholder="Item Name"
              {...register('itemName')}
              className="w-full p-2 border rounded bg-[#FDE5E0]"
            />

            {/* Search Button */}
            <button type="submit" className="bg-[#F24E1E] text-white px-4 py-2 rounded w-full">Search</button>
          </form>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6 bg-white rounded shadow overflow-x-auto">
        <div className="flex justify-end px-4 py-2">
          <button className="flex items-center justify-center bg-[#ffe4df] text-[#f04e24] border border-[#f04e24] px-4 py-2 rounded text-sm">Export <TiExport /></button>
        </div>
        <table className="w-full text-left border-t">
          <thead className="bg-[#F24E1E] text-white">
            <tr>
              <th className="px-4 py-2">Item Code</th>
              <th className="px-4 py-2">UOM</th>
              <th className="px-4 py-2">Item Name</th>
              <th className="px-4 py-2">Total Qty</th>
              <th className="px-4 py-2">Sales Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {Array(7).fill().map((_, i) => (
              <tr key={i} className="border-b">
                <td className="px-4 py-2">PC-00023</td>
                <td className="px-4 py-2">Ctn</td>
                <td className="px-4 py-2">10吋3發夜空王-火焰狼王 | 10138 SHOOT CAKE WOLF</td>
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

export default AreaSalesReport;
