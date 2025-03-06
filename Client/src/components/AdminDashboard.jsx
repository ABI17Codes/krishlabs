import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        // Updated endpoint to match backend route for blog posts
        const res = await axios.get("http://localhost:5000/admin/blog", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };
    fetchPosts();
  }, []);

  const handleLogout = async () => {
    try {
      // Updated logout endpoint to use the correct port
      await axios.post(`${import.meta.env.VITE_API_URL}/admin/logout`, {}, { withCredentials: true });
      localStorage.removeItem("adminToken");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Posts</h3>
        {posts.map((post) => (
      <ul key={post._id}>
          <li className="font-bold">{post.title}</li>
          <li>{post.content}</li>
      </ul>
        ))}
    </div>
  );
};

export default AdminDashboard;
