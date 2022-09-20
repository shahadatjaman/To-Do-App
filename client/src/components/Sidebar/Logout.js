import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { LogoutWrapper } from "./styles";

import { addUser } from "../../feature/auth/register";

const Logout = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch(addUser(null));
    navigate("/login");
  };

  return (
    <LogoutWrapper onClick={logout}>
      <AiOutlineLogout />
    </LogoutWrapper>
  );
};

export default Logout;
