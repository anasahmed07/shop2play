import { changeLan } from "@/redux/slices/settingsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProviderData({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof localStorage !== undefined) {
      const data = localStorage.getItem("garena-language");
      dispatch(changeLan(data));
    }
  }, []);
  return <div>{children}</div>;
}

export default ProviderData;
