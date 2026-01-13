import API from "../services/api";

export default function Register() {
  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    });
    alert("Registered");
  };

  return (
    <form onSubmit={submit}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Register</button>
    </form>
  );
}
