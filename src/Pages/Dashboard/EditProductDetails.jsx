import React from 'react';
import { useForm } from 'react-hook-form';
import { ChevronLeft, ChevronDown, Plus, Edit, Trash2 } from 'lucide-react'; // Import necessary icons
import { Link } from 'react-router-dom';
import { CiImageOn } from 'react-icons/ci'; // Import the image icon

function EditProductDetails() {
      const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Add your form submission logic here
  };

  // Dummy data for the tables
  const purchaseLimitData = [
    { agentGroup: 'Agent A', purchaseLimit: 50 },
    { agentGroup: 'Agent B', purchaseLimit: 20 },
    { agentGroup: 'Agent C', purchaseLimit: 30 },
  ];

  return (
    <div className="p-4 font-sans max-w-full mx-auto">
      {/* Header */}
      <div className="mb-4">
        <Link to={"/master_data/product"} className="flex items-center text-sm text-gray-700 mb-2">
          <ChevronLeft size={16} className="mr-1" />
          <span>Back to Product</span>
        </Link>
      </div>
      <div className="bg-[#F04E24] text-white p-4 rounded-t-lg">
        <h1 className="text-xl font-semibold">Edit Product Details</h1>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-b-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          {/* Product Detail Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Product Detail</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Code */}
              <div>
                <label htmlFor="product-code" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Product Code
                </label>
                <input
                  id="product-code"
                  type="text"
                  {...register("productCode")}
                  defaultValue="F001-23"
                  className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                />
              </div>
              {/* Product Name */}
              <div>
                <label htmlFor="product-name" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Product Name
                </label>
                <input
                  id="product-name"
                  type="text"
                  {...register("productName")}
                  defaultValue="10尺满地黄金 | 10B KAKI EMAS"
                  className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                />
              </div>
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    {...register("category")}
                    defaultValue="Group A"
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="Group A">Group A</option>
                    <option value="Group B">Group B</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Status
                </label>
                <div className="relative">
                  <select
                    id="status"
                    {...register("status")}
                    defaultValue="Inactive"
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
                  >
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-[#F04E24] mb-8" />

          {/* Others Section */}
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Others</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stock Quantity */}
              <div>
                <label htmlFor="stock-quantity" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Stock Quantity
                </label>
                <input
                  id="stock-quantity"
                  type="text"
                  {...register("stockQuantity")}
                  defaultValue="1234"
                  className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                />
              </div>
              {/* Default Price */}
              <div>
                <label htmlFor="default-price" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Default Price
                </label>
                <input
                  id="default-price"
                  type="text"
                  {...register("defaultPrice")}
                  defaultValue="RM108.20"
                  className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                />
              </div>
              {/* Product Image */}
              <div>
                <div>
                <label htmlFor="view-ssm" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Product Image
                </label>
                <div className="relative w-full h-12 bg-[#FFF0ED] border border-[#F24E1E] border-dashed rounded-md flex items-center justify-center cursor-pointer overflow-hidden py-2">
                  {/* Hidden file input */}
                  <input
                    id="view-ssm"
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    aria-label="View file"
                  />
                  {/* View icon (using an SVG for customizability and consistency) */}
                  <CiImageOn />
                </div>
              </div>
              </div>
              {/* Product Image2 */}
              <div>
                <label htmlFor="view-ssm" className="block text-sm font-medium text-[#F04E24] mb-2">
                  Product Image 2
                </label>
                <div className="relative w-full h-12 bg-[#FFF0ED] border border-[#F24E1E] border-dashed rounded-md flex items-center justify-center cursor-pointer overflow-hidden py-2">
                  {/* Hidden file input */}
                  <input
                    id="view-ssm"
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    aria-label="View file"
                  />
                  {/* View icon (using an SVG for customizability and consistency) */}
                  <CiImageOn />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-[#F04E24] mb-8" />

          {/* Purchase Limit Tables Section - Arranged side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Purchase Limit Per Day Section */}
            <div className="rounded-md shadow-md p-4"> {/* Added rounded-md and shadow-md */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-700">Purchase Limit Per Day</h2>
                <button type="button" className="text-[#F04E24] hover:text-orange-600">
                  <Plus size={24} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-t">
                  <thead className="bg-[#F24E1E] text-white">
                    <tr>
                      <th className="px-4 py-2">Agent Group</th>
                      <th className="px-4 py-2">Purchase Limit</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    {purchaseLimitData.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">
                          <div className="relative">
                            <select
                              {...register(`purchaseLimitPerDay[${index}].agentGroup`)}
                              defaultValue={item.agentGroup}
                              className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
                            >
                              <option value="Agent A">Agent A</option>
                              <option value="Agent B">Agent B</option>
                              <option value="Agent C">Agent C</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            {...register(`purchaseLimitPerDay[${index}].purchaseLimit`)}
                            defaultValue={item.purchaseLimit}
                            className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                          />
                        </td>
                        <td className="px-4 py-2 flex gap-2">
                          <button type="button" className="text-blue-500 hover:text-blue-700">
                            <Edit size={16} />
                          </button>
                          <button type="button" className="text-red-500 hover:text-red-700">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* By Agent Section */}
            <div className="rounded-md shadow-md p-4"> {/* Added rounded-md and shadow-md */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-700">By Agent</h2>
                <button type="button" className="text-[#F04E24] hover:text-orange-600">
                  <Plus size={24} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-t">
                  <thead className="bg-[#F24E1E] text-white">
                    <tr>
                      <th className="px-4 py-2">Agent Group</th>
                      <th className="px-4 py-2">Purchase Limit</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    {purchaseLimitData.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="px-4 py-2">
                          <div className="relative">
                            <select
                              {...register(`byAgent[${index}].agentGroup`)}
                              defaultValue={item.agentGroup}
                              className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
                            >
                              <option value="Agent A">Agent A</option>
                              <option value="Agent B">Agent B</option>
                              <option value="Agent C">Agent C</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="number"
                            {...register(`byAgent[${index}].purchaseLimit`)}
                            defaultValue={item.purchaseLimit}
                            className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                          />
                        </td>
                        <td className="px-4 py-2 flex gap-2">
                          <button type="button" className="text-blue-500 hover:text-blue-700">
                            <Edit size={16} />
                          </button>
                          <button type="button" className="text-red-500 hover:text-red-700">
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-[#F04E24] hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProductDetails