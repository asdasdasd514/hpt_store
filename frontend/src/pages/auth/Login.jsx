import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/authService";
import { useAuth } from "../../auth/AuthContext";
import GoogleLoginButton from "../../components/GoogleLoginButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const user = await loginApi(email, password);
    login(user);

    if (user.role === "admin") navigate("/admin");
    else if (user.role === "staff") navigate("/staff/orders");
    else navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-20 border p-6 rounded">
      <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>

      <form onSubmit={submit}>
        <input
          className="input"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input mt-3"
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn mt-4 w-full">Đăng nhập</button>
      </form>

      <GoogleLoginButton />
    </div>
  );
}
