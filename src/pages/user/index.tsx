import Menu from "../../components/Menu";
import logo from "../../assets/IconAppClickgas.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../data";
import {  useSelector } from "react-redux";
import { login, userAuth } from "../../redux/sliceauth";
import { useEffect, useState } from "react";
import { UserInfo } from "../../types";
import "./user.css";
import { Navigate } from "react-router-dom";

const User = () => {
  
  const { userId } = useSelector(userAuth);
  const {logIn} = useSelector(login)
  // const [loading, setLoading] = useState<boolean>();
  const [user, setUser] = useState<UserInfo>();

  const infoUser = async () => {
    // setLoading(true);

    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      let usr = {
        fone: docSnap.data()?.fone,
        name: docSnap.data()?.name,
        neighborhood: docSnap.data()?.neighborhood,
        numberHause: docSnap.data()?.numberHause,
        paymentForm: docSnap.data()?.paymentForm,
        photo: docSnap.data()?.photo,
        refHause: docSnap.data()?.refHause,
        streetName: docSnap.data()?.streetName,
      };
      setUser(usr as UserInfo);

      // setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    infoUser();
  }, []);

  return (
    <section className="container ">
      { !logIn && <Navigate to={"/"} />}
      <Menu />
      <img src={logo} alt="" className="img" />
      <article className="content">
        <div className="w-full flex  justify-between items-center">
          <h1 className="text-5xl mx-auto">{user?.name}</h1>
          <img src={user?.photo!} alt="" className="img" />
        </div>
        <div className="flex justify-around items-center w-full border-[#BC000E] border rounded-md">
          <p className="text-4xl">Fone: {user?.fone}</p>
          <p className="text-4xl">N°:{user?.numberHause}</p>
        </div>
        <div className="flex justify-around min-w-full border-[#BC000E] border rounded-md items-center">
          <p className="text-4xl">Rua:{user?.streetName}</p>
        </div>
        <div className="flex justify-around  min-w-full border-[#BC000E] border rounded-md items-center">
          <p className="text-4xl">Referência:{user?.refHause}</p>
        </div>
        <div className="flex justify-around items-center w-full border-[#BC000E] border rounded-md ">
          <p className="text-4xl">Bairro: {user?.neighborhood}</p>
          <p className="text-4xl">Pagamento: {user?.paymentForm}</p>
        </div>
      </article>
    </section>
  );
};
export default User;
