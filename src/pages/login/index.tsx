import "./login.css";
import logo from "../../assets/IconAppClickgas.png";
import Input from "../../components/Input";
import Menu from "../../components/Menu";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../data";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log, login, userUid } from "../../redux/sliceauth";
import toast from "react-hot-toast";

const schema = z.object({
  email: z
    .string()
    .email("insira um email valido!")
    .min(1, "O campo email é obrigatório!"),
  password: z.string().min(6, "A senha não pode ser menor que 6 caracteres!"),
});
type FormData = z.infer<typeof schema>;

const Login = () => {
  const { logIn } = useSelector(login);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const handleLogin = (data: FormData) => {
    let email = data.email;
    let pass = data.password;

    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        toast.success("Login Efetuado com sucesso!");
        let u = result.user.uid;
        dispatch(userUid({ userId: u }));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setTimeout(() => {
          dispatch(log({ isLogged: true }));
        }, 700);
      });
  };
  return (
    <>
      {logIn && <Navigate to={"/user"} />}
      <section className="container  h">
        <Menu />
        <img src={logo} alt="" className="img" />
        <article className="content">
          <h1 className="text-5xl font-bold text-[#bc000e]">Login</h1>
          <form className="form" onSubmit={handleSubmit(handleLogin)}>
            <h6 className="pl-1">Email:</h6>
            <Input
              placeholder="Digite seu Email..."
              type="Email"
              name="email"
              error={errors.email?.message}
              register={register}
            />
            <h6 className="pl-1">Senha:</h6>
            <Input
              placeholder="Digite sua Senha..."
              type="password"
              name="password"
              error={errors.password?.message}
              register={register}
            />
            <button className="button text-center text-sm ">
              Acessar Sua Conta
            </button>
          </form>
        </article>
      </section>
    </>
  );
};
export default Login;
