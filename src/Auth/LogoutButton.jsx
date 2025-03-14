import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button className="bg-[#C7DB9C]" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
