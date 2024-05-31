import { createContext, useState } from "react";
const GetListContext = createContext();

function Provider({ children }) {
  const [getList, setGetList] = useState(true);
  const getListContextValue = {
    // when key and value of an object are same varaibles, then instead of { getList: getList } we can use { getList }
    getList,
    setGetList,
  };

  return (
    <GetListContext.Provider value={getListContextValue}>
      {children}
    </GetListContext.Provider>
  );
}

export { Provider };
export default GetListContext;
