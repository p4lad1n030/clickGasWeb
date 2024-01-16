import "./menu.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log, login, userAuth, userUid } from "../../redux/sliceauth";
import { deleteUser, signOut } from "firebase/auth";
import { auth, db } from "../../data";
import { doc, deleteDoc } from "firebase/firestore";
import toast from "react-hot-toast";
interface Politica {
  politica?: boolean;
}
const Menu = ({ politica }: Politica) => {
  const { userId } = useSelector(userAuth);
  const { logIn } = useSelector(login);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const user = auth.currentUser;
    try {
      toast.success('Conta Excluida com sucesso!')
      await deleteUser(user!);
      await deleteDoc(doc(db, "users", userId));
      dispatch(log({isLogged:false}))
      dispatch(userUid({ userId: ' ' }));


    } catch (e) {}
    // console.log(user);
  };
  const handleLogOut = async () => {
    try {
      toast.success('Saiu!')
      await signOut(auth);
      dispatch(log({isLogged:false}))
      dispatch(userUid({ userId: ' ' }));
    } catch (e) {
      toast.error("Erro ao sair da conta")
    }
    // console.log(user);
    /*
   

 */
  };
  return (
    <>
      
      <menu className=" menu">
        <Link to="/clickgasweb/">
          <p className="text-white font-bold text-3xl mr-5">Home</p>
        </Link>
        {!logIn && (
          <Link to="/clickgasweb/login">
            <p className="text-white font-bold text-3xl mx-5">Login</p>
          </Link>
        )}

        {!politica && (
          <Link to={"/clickgasweb/politica"}>
            <p className="text-white font-bold text-3xl ">
              Politica de Privacidade
            </p>
          </Link>
        )}
      </menu>
      {logIn && (
        <div className="flex justify-around items-center w-full">
          <button
            type="button"
            className="bg-white p-3 my-1 rounded-xl"
            onClick={handleLogOut}
          >
            <span className="text-[#BC000E] text-lg font-semibold">
              Sair da conta
            </span>
          </button>
          <button
            type="button"
            className="bg-white p-3 my-1 rounded-xl"
            onClick={handleDelete}
          >
            <span className="text-[#BC000E] text-lg font-semibold">
              Apagar Conta
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default Menu;
