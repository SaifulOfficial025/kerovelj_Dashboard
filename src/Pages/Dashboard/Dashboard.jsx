import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

import {
  FaDiscord,
  FaTwitter,
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiMicrosoftOutlookLogoBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaHistory } from "react-icons/fa";
import { FiHelpCircle, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo from "../../assets/GEMUPS_LOGO.png";
import { IoCartOutline } from "react-icons/io5";

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const menuItems = [
    {
      section: "MENU",
      items: [
        {
          name: "KYC Service",
          icon: (
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 4h18M4 8h16M3 12h18M4 16h16M3 20h18" />
            </svg>
          ),
          path: "/kyc",
        },
        {
          name: "Accounts",
          icon: <HiOutlineUserGroup className="w-4 h-4" />,
          children: [
            {
              name: "Outlook",
              icon: <PiMicrosoftOutlookLogoBold className="text-blue-400" />,
              path: "/outlook",
            },
            {
              name: "Discord",
              icon: <FaDiscord className="text-indigo-400" />,
              path: "/discord",
            },
            {
              name: "Twitter",
              icon: <FaTwitter className="text-sky-400" />,
              path: "/twitter",
            },
            {
              name: "Telegram",
              icon: <FaTelegramPlane className="text-sky-300" />,
              path: "/telegram",
            },
            {
              name: "Gmail",
              icon: <MdEmail className="text-red-400" />,
              path: "/gmail",
            },
            {
              name: "Instagram",
              icon: <FaInstagram className="text-pink-400" />,
              path: "/instagram",
            },
            {
              name: "TikTok",
              icon: <FaTiktok className="text-white" />,
              path: "/tiktok",
            },
            {
              name: "Facebook",
              icon: <FaFacebook className="text-blue-600" />,
              path: "/facebook",
            },
          ],
        },
        {
          name: "Proxy",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          ),
          path: "/proxy",
        },
      ],
    },
    {
      section: "General",
      items: [
        {
          name: "History",
          icon: <FaHistory className="w-4 h-4" />,
          path: "/history",
        },
        {
          name: "Help",
          icon: <FiHelpCircle className="w-4 h-4" />,
          path: "/help",
        },
      ],
    },
  ];

  useEffect(() => {
    const currentItem = menuItems[0].items.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setSelectedItem(currentItem.name);
    }
  }, [location.pathname]);

  const handleItemClick = (itemName, path) => {
    setSelectedItem(itemName);
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } h-screen bg-[#0F131A] text-white border-r border-gray-800 transition-all duration-300 ease-in-out flex flex-col`}
      >
        {/* Logo + Toggle */}
        <div className="flex items-center justify-between h-16 px-3 border-b border-[#1A1F2E]">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-auto" />
            {!isCollapsed && (
              <span className="text-sm font-semibold text-white"></span>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-400 hover:text-white"
          >
            {isCollapsed ? (
              <ChevronsRight size={20} />
            ) : (
              <ChevronsLeft size={20} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-auto px-2 py-3">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-2">
              {!isCollapsed && (
                <div className="text-[11px] text-gray-400 font-semibold uppercase px-2 mb-2">
                  {section.section}
                </div>
              )}
              <ul className="space-y-1">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    {/* Main Item */}
                    <div
                      onClick={() => {
                        if (item.children) {
                          setSelectedItem((prev) =>
                            prev === item.name ? "" : item.name
                          );
                        } else {
                          handleItemClick(item.name, item.path);
                        }
                      }}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group transition
                      ${
                        item.active
                          ? "bg-[#1F2A37] text-[#36D399]"
                          : "hover:bg-[#1A1F2E]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span>{item.icon}</span>
                        {!isCollapsed && (
                          <span
                            className={`${
                              item.active ? "text-[#36D399]" : "text-gray-300"
                            } text-sm`}
                          >
                            {item.name}
                          </span>
                        )}
                      </div>
                      {item.children && !isCollapsed && (
                        <span className="text-gray-400">
                          {selectedItem === item.name ? (
                            <FiChevronDown size={16} />
                          ) : (
                            <FiChevronRight size={16} />
                          )}
                        </span>
                      )}
                    </div>

                    {/* Dropdown */}
                    {item.children &&
                      selectedItem === item.name &&
                      !isCollapsed && (
                        <ul className="ml-7 mt-1 space-y-1">
                          {item.children.map((child, childIdx) => (
                            <li key={childIdx}>
                              <a
                                href={child.path}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleItemClick(child.name, child.path);
                                }}
                                className="flex items-center gap-2 text-sm text-gray-300 hover:bg-[#1A1F2E] transition p-2 rounded-md"
                              >
                                <span>{child.icon}</span>
                                <span>{child.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-16 bg-black border-b border-gray-800">
          <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="text-white font-bold text-base">
                {selectedItem}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <select className="appearance-none bg-gray-800 text-white py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm">
                  <option>EN</option>
                  <option>ES</option>
                  <option>FR</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <button className="bg-[#13f195] text-black font-semibold py-2 px-4 rounded-md text-sm transition duration-300"
              onClick={() => {
                setSelectedItem("Login");
                navigate('/login');
              }}
              >
                Login
              </button>

              <button className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md text-sm" onClick={() => {
                setSelectedItem("Register");
                navigate('/register');
              }}>
                Register
              </button>
              <div className="p-2 rounded-md">
                <IoCartOutline className="text-[#13f195] text-2xl" />
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <span className="text-white font-bold text-3xl">{selectedItem}</span>
          </div>
        </header>
        <div className="py-3 bg-black text-white text-bold">
          <span className="pl-4 text-xl font-bold">{selectedItem}</span>
        </div>

        <main className="flex-1 overflow-auto p-6 bg-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
