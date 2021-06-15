import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [data, setData] = useState({});
  const [file, setFile] = useState();
  const [form, setForm] = useState({});
  return (
    <Context.Provider value={{ data, setData, file, setFile, form, setForm }}>
      {children}
    </Context.Provider>
  );
};
