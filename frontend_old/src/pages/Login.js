import API from "../services/api";

export default function Login() {
  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", {
      email: e.target.email.value,
      password: e.target.password.value,
    });
    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <form onSubmit={submit}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
