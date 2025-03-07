"use client";

import { createContext, useContext, useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const AlertContext = createContext(null);

export function AlertProvider({ children }) {
  const showAlert = useCallback((message, callback) => {
    MySwal.fire({
      title: "알림",
      html: message,
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed && typeof callback === "function") {
        callback();
      }
    });
  }, []);

  const showConfirm = useCallback((message, callback) => {
    MySwal.fire({
      title: "확인",
      html: message,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (typeof callback === "function") {
        callback(result.isConfirmed);
      }
    });
  }, []);

  return <AlertContext.Provider value={{ alert: showAlert, confirm: showConfirm }}>{children}</AlertContext.Provider>;
}

export function useAlert() {
  return useContext(AlertContext);
}
