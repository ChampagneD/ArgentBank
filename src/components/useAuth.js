import { useSelector } from "react-redux";

const useAuth = () => {
  const token = useSelector((state) => state.user.token);
  if (token) return true;
  else return false;
};

export default useAuth;