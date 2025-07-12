import React from "react";
import { useForm } from "react-hook-form";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";


function AddNewSalesAgent() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


  return (
    <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="">
          <Link to={"/master_data/sales_agent"} className="flex justify-left mb-2">
            <ChevronLeft size={16} />
            <span className="text-sm">Back to Sales Agent</span>
          </Link>
        </div>
        <div className="bg-[#F04E24] text-white p-4 rounded-t-lg">
          <div className="flex items-center gap-2 mb-2">
          </div>
          <h1 className="text-xl font-semibold">Add New Sales Agent</h1>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-b-lg shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            {/* Login Detail Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Login Detail</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    {...register("username", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#F04E24] mb-8" />

            {/* Sales Agent Detail Section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Sales Agent Detail</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    {...register("contactNumber", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#F04E24] mb-2">
                    Additional Contact Number
                  </label>
                  <input
                    type="tel"
                    {...register("contactNumber", { required: true })}
                    className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#F04E24] mb-8" />

            {/* Other Detail Section */}
            <div className="p-4 font-sans max-w-full mx-auto">
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Others</h2>
        {/* First row: Agent Group and Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Agent Group Column */}
          <div>
            <label htmlFor="agent-group" className="block text-sm font-medium text-[#F04E24] mb-2">
              Agent Group
            </label>
            <div className="relative">
              <select
                id="agent-group"
                {...register("agentGroup", { required: true })}
                className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
              >
                <option value="">Select Agent Group</option>
                <option value="groupA">Group A</option>
                <option value="groupB">Group B</option>
                <option value="groupC">Group C</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Status Column */}
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

        {/* Second row: Credit Limit and Credit Term */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Credit Limit Column */}
          <div>
            <label htmlFor="credit-limit" className="block text-sm font-medium text-[#F04E24] mb-2">
              Credit Limit
            </label>
            <div className="relative">
              <select
                id="credit-limit"
                {...register("creditLimit", { required: true })}
                className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
              >
                <option value="">Select Credit Limit</option>
                <option value="10">10</option>
                <option value="100">100</option>
                <option value="1000">1000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Credit Term Column */}
          <div>
            <label htmlFor="credit-term" className="block text-sm font-medium text-[#F04E24] mb-2">
              Credit Term
            </label>
            <input
              id="credit-term"
              type="text" // Changed to text as tel might imply specific formatting
              {...register("creditTerm", { required: true })}
              className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent"
            />
          </div>
        </div>

        {/* Third row: Account Book and Upload */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Account Book Column */}
          <div>
            <label htmlFor="account-book" className="block text-sm font-medium text-[#F04E24] mb-2">
              Account Book
            </label>
            <div className="relative">
              <select
                id="account-book"
                {...register("accountBook", { required: true })}
                className="w-full px-3 py-2 bg-rose-50 border border-rose-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F04E24] focus:border-transparent appearance-none"
              >
                <option value="">Select Account Book</option>
                <option value="book1">Book 1</option>
                <option value="book2">Book 2</option>
                <option value="book3">Book 3</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          {/* Upload (SSM / Director) Column - now slimmed down */}
          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium text-[#F04E24] mb-2">
              Upload (SSM / Director)
            </label>
            <div className="relative w-full h-12 bg-[#FFF0ED] border border-[#F24E1E] border-dashed rounded-md flex items-center justify-center cursor-pointer overflow-hidden py-2">
              {/* Hidden file input */}
              <input
                id="file-upload"
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                aria-label="Upload file"
              />
              {/* Upload icon (using an SVG for customizability and consistency) */}
              <svg
                className="w-6 h-6 text-[#F24E1E]" /* Adjusted icon size */
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                ></path>
              </svg>
            </div>
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

export default AddNewSalesAgent