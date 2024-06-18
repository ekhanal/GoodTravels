import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface Props {
  open: boolean;
  handleOpenClose: () => void;
}
const CustomDropDownArrow: React.FC<Props> = ({ open, handleOpenClose }) => {
  return !open ? (
    <IoIosArrowDown
      size={20}
      className="font-medium"
      onClick={handleOpenClose}
    />
  ) : (
    <IoIosArrowUp size={20} className="font-medium" onClick={handleOpenClose} />
  );
};

export default CustomDropDownArrow;
