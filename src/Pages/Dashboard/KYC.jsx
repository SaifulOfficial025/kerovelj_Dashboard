import { useState } from "react";
import { FaShoppingCart, FaEye } from "react-icons/fa";

export default function OrderTable() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const tabs = ["All", "Proxy", "Accounts", "Services"];
  const dummyData = [
  {
    type: 'Accounts',
    status: 'ENDED',
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000',
    date: '12.05.2024 / 30 days',
    isProxy: false,
  },
  {
    type: 'Accounts',
    status: 'ENDED',
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000',
    date: '12.05.2024 / 30 days',
    isProxy: false,
  },
  {
    type: 'Accounts',
    status: 'ENDED', // Example with a different status like [ENDED]
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000',
    date: '12.05.2024 / 30 days',
    isProxy: false,
  },
  {
    type: 'Accounts',
    status: null, // No status badge
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000',
    date: '12.05.2024 / 30 days',
    isProxy: false,
  },
  {
    type: 'Proxy [Residential]',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Accounts',
    status: null, // No status badge
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000',
    date: '12.05.2024 / 30 days',
    isProxy: false,
  },
  {
    type: 'Proxy [Residential]',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
  {
    type: 'Proxy',
    status: null,
    name: 'Аккаунты Telegram RU 1шт tdata для Telegram Portable exe',
    shop: 'NVS Shop',
    description: 'Ручная, Отлежка: 10 дн+, Пол: mix. AccsFarm',
    amount: '10 000 / 18 000',
    date: '12.05.2024 / 30 days',
    isProxy: true,
  },
];

  // Filter logic based on active tab
  const filteredData =
    activeTab === "All"
      ? dummyData
      : dummyData.filter((item) =>
          item.type.toLowerCase().includes(activeTab.toLowerCase())
        );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`w-10 h-10 flex items-center justify-center rounded-full border ${
            currentPage === i
              ? "bg-green-500 text-black font-semibold"
              : "border-gray-600 text-white hover:border-green-500 hover:text-green-500"
          } transition-colors`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-3 px-4 text-white font-semibold text-lg relative group ${
                activeTab === tab ? "text-white" : "text-gray-400"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1); // Reset to first page when tab changes
              }}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-black text-white p-3">
          <table className="w-full">
            <thead className="bg-black border-b border-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-semibold text-sm">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-semibold text-sm">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-gray-500 font-semibold text-sm">
                  Dates
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        {item.status === "ENDED" && (
                          <span className="text-red-500 text-xs font-semibold uppercase mr-1">
                            ENDED
                          </span>
                        )}
                        <span
                          className={`${
                            item.isProxy ? "text-green-500" : "text-gray-400"
                          } text-sm font-semibold`}
                        >
                          {item.type}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {item.shop}
                        </span>
                      </div>
                      <div className="text-white text-sm mt-1">{item.name}</div>
                      <div className="text-gray-500 text-xs">
                        {item.description}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`${
                        item.isProxy ? "text-green-500" : "text-white"
                      } text-sm`}
                    >
                      {item.amount}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{item.date}</span>
                    <div className="flex items-center gap-2">
                      {!item.isProxy ? (
                        <button className="bg-green-600 p-2 rounded-md hover:bg-green-700 transition-colors">
                          <FaShoppingCart className="text-white w-4 h-4" />
                        </button>
                      ) : (
                        <>
                          <button className="bg-gray-700 p-2 rounded-md hover:bg-gray-600 transition-colors">
                            <FaShoppingCart className="text-gray-400 w-4 h-4" />
                          </button>
                          <button className="bg-green-600 p-2 rounded-md hover:bg-green-700 transition-colors">
                            <FaEye className="text-white w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 fixed bottom-10 left-0 right-0">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-green-500 hover:text-green-500 transition-colors disabled:opacity-50"
            >
              &laquo;
            </button>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-green-500 hover:text-green-500 transition-colors disabled:opacity-50"
            >
              &lsaquo;
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-green-500 hover:text-green-500 transition-colors disabled:opacity-50"
            >
              &rsaquo;
            </button>
            <button
              onClick={() => paginate(totalPages)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-green-500 hover:text-green-500 transition-colors disabled:opacity-50"
            >
              &raquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
