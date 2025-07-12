

import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Pages/Dashboard/Home";
import Bookings from "../Pages/Dashboard/Bookings";
import SignUp from "../Pages/Authentication/SignIn";
import SalesOrder from "../Pages/Dashboard/SalesOrder";
import AddProduct from "../Pages/Dashboard/AddProduct";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { MdOutlineBarChart } from "react-icons/md";
import AgentSalesReport from "../Pages/Dashboard/AgentSalesReport";
import ItemSalesReport from "../Pages/Dashboard/ItemSalesReport";
import StockRemainReport from "../Pages/Dashboard/StockRemainReport";
import AreaSalesReport from "../Pages/Dashboard/AreaSalesReport";
import PerformanceReport from "../Pages/Dashboard/PerformanceReport";
import SystemSettings from "../Pages/Dashboard/SystemSettings";
import UserSettings from "../Pages/Dashboard/UserSettings";
import EditUser from "../Pages/Dashboard/EditUser";

import { CiSettings } from "react-icons/ci";
import AddNewUser from "../Pages/Dashboard/AddNewUser";
import SalesAgent from "../Pages/Dashboard/SalesAgent";
import SalesAgentGroup from "../Pages/Dashboard/SalesAgentGroup";
import Product from "../Pages/Dashboard/Product";
import Pricing from "../Pages/Dashboard/Pricing";
import Promotion from "../Pages/Dashboard/Promotion";
import DeliveryFee from "../Pages/Dashboard/DeliveryFee";
import AddNewSalesAgent from "../Pages/Dashboard/AddNewSalesAgent";
import EditSalesAgent from "../Pages/Dashboard/EditSalesAgent";
import AddNewSalesAgentGroup from "../Pages/Dashboard/AddNewSalesAgentGroup";
import EditProductDetails from "../Pages/Dashboard/EditProductDetails";
import AddPromotion from "../Pages/Dashboard/AddPromotion";
import EditPromotionalDetails from "../Pages/Dashboard/EditPromotionalDetails";

// import AgentSalesReport from "../Pages/Dashboard/AgentSalesReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true, 
        element: <AdminHome />
      },
      {
        path: "home",
        element: <AdminHome />
      },
      {
        path: "sales_order",
        element: <SalesOrder/>
      }, 
      {
        path: "booking_info",
        element:<Bookings/>
      },
      {
        path: "product/:id?",
        element: <AddProduct/>
      },
     {

        name: "Sales Report",
        icon: <MdOutlineBarChart size={20} />,
        path: "/sales_report", 
        children: [
          {
            name: "Agent Sales Report",
            path: "agent_sales_report",
            element: <AgentSalesReport/>
          },
          {
            name: "Item Sales Report",
            path: "item_sales_report",
            element: <ItemSalesReport/>
          },
          {
            name: "Stock Remain Report",
            path: "stock_remain_report",
            element: <StockRemainReport/>
          },
          {
            name: "Area Sales Report",
            path: "area_sales_report",
            element: <AreaSalesReport/>
          },
          {
            name: "Performance Report",
            path: "performance_report",
            element: <PerformanceReport/>
          },
        ],
      },
      {
        name: "Settings",
        icon: <CiSettings size={20} />,
        path: "/settings",
        children: [
          {
            name: "Users (Office Use)"  ,
            path: "/settings/users/",
            element: <UserSettings/>,
          },
          {
            name: "System Settings"  ,
            path: "/settings/system_settings/",
            element: <SystemSettings/>
          },
        ]
      },
      {
            name: "Add New User",
            path: "/add_new_user",
            element: <AddNewUser/>
      },
      {
        name: "Edit User",
        path: "/edit_user",
        element: <EditUser/>
      },
      {
        name: "Master Data",
        icon: <CiSettings size={20} />,
        path: "/master_data",
        children: [
            {
              name: "Sales Agent",
              path: "/master_data/sales_agent",
              element: <SalesAgent/>
            },
            {
              name: "Sales Agent Group",
              path: "/master_data/sales_agent_group",
              element: <SalesAgentGroup/>
            },
            {
              name: "Product",
              path: "/master_data/product",
              element: <Product/>
            },
            {
              name: "Pricing",
              path: "/master_data/pricing",
              element: <Pricing/>
            },
            {
              name: "Promotion",
              path: "/master_data/promotion",
              element: <Promotion/>
            },  
            {
              name: "Delivery Fee",
              path: "/master_data/delivery_fee",
              element: <DeliveryFee/>
            }
          ]
      },
      {
        name: "Add New Sales Agent",
        path: "/add_new_sales_agent",
        element: <AddNewSalesAgent/>
      },
      {
        name: "Edit Sales Agent",
        path: "/edit_sales_agent",
        element: <EditSalesAgent/>
      },
      {
        name: "Add New Sales Agent Group",
        path: "/add_new_sales_agent_group",
        element: <AddNewSalesAgentGroup/>
      },
      {
        name: "Edit Product Details",
        path: "/edit_product_details",
        element: <EditProductDetails/>
      },
      {
        name: "Add Promotion",
        path: "/add_promotion",
        element: <AddPromotion/>
      },
      {
        name: "Edit Promotion Details",
        path: "/edit_promotion_details",
        element: <EditPromotionalDetails/>
      }
    ]
  },

  {
    path: "/sign_up",
    element: <SignUp/>
  }
]);
