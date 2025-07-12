import React from "react";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function AddNewSalesAgentGroup() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };
    
  return (
    <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="">
          <Link to={"/master_data/sales_agent_group"} className="flex justify-left mb-2">
            <ChevronLeft size={16} />
            <span className="text-sm">Back to Sales Agent Group</span>

          </Link>
        </div>
        <div className="bg-[#F04E24] text-white p-4 rounded-t-lg">
          <div className="flex items-center gap-2 mb-2">
          </div>
          <h1 className="text-xl font-semibold">Add New Sales Agent Group</h1>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b-lg shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            {/* Login Detail Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Agent Group Detail</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Group Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
                <div>
            <label htmlFor="status" className="block text-sm font-medium text-[#F04E24] mb-2">
              Status
            </label>
            <div className="relative">
              <select
                id="status"
                {...register("status", { required: true })}
                className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#F04E24] hover:bg-orange-600 text-white px-6 py-2  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:ring-offset-2"
              >
                Change
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddNewSalesAgentGroup