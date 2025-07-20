"use client";
import React from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ProviderData from "./providerData";

const Storeprovider = ({ children }) => {
  return (
    <Provider store={store}>
      <ProviderData>{children}</ProviderData>
    </Provider>
  );
};

export default Storeprovider;
