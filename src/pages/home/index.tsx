// import "./home.css";
import logo from "../../assets/IconAppClickgas.png";
import Menu from "../../components/Menu";

const Home = () => {
  return (
    <section className="container h" >
      <Menu />
      <img src={logo} alt="" className="img" />
      <article className="content">
        <h1 className="text-5xl font-bold text-[#bc000e]">Como Excluir Sua Conta</h1>
        <p className="text-base">Faça login, clicando em login, na sua conta, e no canto superior direito hávera dois botões um para simplesmente sair da conta que NÃO a exclui e o outro Excluir Conta com o qual você pode apagar todos os dados fornecidos por você no app Click Gas, lembrando que para usar a opção de pedir com um clique dentro do app você precisa ter um perfil com as informações para a entrega</p>
      </article>
    </section>
  );
};
export default Home;
