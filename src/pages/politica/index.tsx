import "./politica.css";
import logo from "../../assets/IconAppClickgas.png";
import Menu from "../../components/Menu";

const Politica = () => {
  return (
    <section className="container ">
      <Menu politica />
      <img src={logo} alt="" className="img" />
      <article className="content">
          <h1 className="text-5xl font-bold text-[#bc000e]">Politica de Privacidade</h1>
        <div className="">
          <h3 className="text-2xl ">
            Esta Política de Privacidade descreve como as informações pessoais dos
            usuários são coletadas, usadas e compartilhadas ao utilizar o
            aplicativo Click Gás.
          </h3>
          <h3 className="text-2xl ">1. Informações Coletadas</h3>
          <p className="text-lg ">1.1 Informações Pessoais:</p>
          <h3 className="text-2xl">
            Ao criar uma conta, coletamos seu nome, endereço e informações de
            contato.
          </h3>
          <p className="text-lg">1.2 Informações de Uso:</p>
          <p className="text-base">
            Registramos dados sobre como você interage com o aplicativo, como
            páginas visitadas e funcionalidades utilizadas.
          </p>
          <h4 className="text-xl">2. Uso das Informações</h4>
          <p className="text-lg">2.1 Melhoria dos Serviços:</p>
          <p className="text-base">
            Utilizamos as informações para aprimorar nossos serviços, entender as
            necessidades dos usuários e otimizar a experiência.
          </p>
          <p className="text-lg">2.2 Comunicação:</p>
          <p className="text-base">
            Podemos entrar em contato para fornecer informações sobre o serviço,
            como atualizações e novidades.
          </p>
          <h4 className="text-xl">3. Compartilhamento de Informações</h4>
          <p className="text-lg">3.1 Requisitos Legais:</p>
          <p className="text-base">
            Reservamo-nos o direito de compartilhar informações conforme exigido
            por leis e regulamentações.
          </p>
          <h4 className="text-xl">4. Segurança</h4>
          <p className="text-lg">4.1 Medidas de Segurança:</p>
          <p className="text-base">
            Implementamos através das regras de segurança do firebase medidas para proteger as informações contra acesso não
            autorizado e uso indevido.
          </p>
          <h4 className="text-xl">5. Seus Direitos</h4>
          <p className="text-lg">5.1 Acesso e Atualização:</p>
          <p className="text-base">
            Você tem o direito de acessar, corrigir e excluir suas informações pessoais a
            qualquer momento.
          </p>
          <h4 className="text-xl">6. Alterações na Política de Privacidade</h4>
          <p className="text-lg">6.1 Notificação de Alterações:</p>
          <p className="text-base">
            Notificaremos sobre quaisquer alterações significativas nesta
            política. Ao usar o aplicativo, você concorda com os termos desta
            Política de Privacidade.
          </p>
        </div>
      </article>
    </section>
  );
};
export default Politica;
