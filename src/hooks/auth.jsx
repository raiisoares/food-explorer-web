import { useContext, useState, createContext, useEffect } from "react";
import { api } from "../services/api"

const AuthContext = createContext({});

export function AuthProvider({ children }) {

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
