import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "context/User";
import { getUserData, setUserData } from "helpers/utils";

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = useCallback((userData) => {
    setUser(userData);
    setUserData(userData);
  }, []);

  const value = useMemo(
    () => ({ user, setUser: updateUser }),
    [user, updateUser]
  );

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(userData);
    }
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
