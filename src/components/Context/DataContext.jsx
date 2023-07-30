import axios from "axios";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);
  
  return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;

  

