import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/login`,
        credentials,
        { withCredentials: true }
      );
      // console.log("Login success:", res.data);
      localStorage.setItem("adminToken", res.data.token || "true");
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);

      toast.error(err.response?.data?.message || "Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
