import React from "react";
import { Avatar } from "antd";
import { FaBars, FaAngleRight, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { TfiAngleDown } from "react-icons/tfi";
import { PiUserBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { SlLock, SlLogout } from "react-icons/sl";
import { capitalizeFirstLetter, data_successfully } from "../../utils/helper";
import { ToastContainer } from "react-toastify";
import Button from "antd-button-color";
import { useNavigate } from "react-router-dom";
function AppHeader(props) {
  const { collapsed, setCollapsed, title } = props;
  const { path_name } = useSelector((state) => state.helper);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center py-4 border-b-2 border-gray-50 px-4">
        <div className="flex items-center gap-3">
          <div>
            <Button
              type="primary"
              shape="circle"
              icon={collapsed ? <FaAngleRight /> : <FaBars />}
              onClick={() => setCollapsed(!collapsed)}
            />
          </div>
          <div>
            <h4 className="text-brand-100 font-bold text-base capitalize">
              {path_name === "/" ? (
                <>Dashboard</>
              ) : (
                <>{path_name.replace(/\//g, "")}</>
              )}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
