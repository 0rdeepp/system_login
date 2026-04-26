import firebase from "../../components/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Cadastro.css";

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [dados, setDados] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        
        return () => unsubscribe();
    }, []);

    useEffect(() => {
    if (user) {
        firebase.firestore()
            .collection("usuarios")
            .where("email", "==", user.email) // banco usa ids aleatorios 
            .get()
            .then((snapshot) => {
                if (!snapshot.empty) {
                    setDados(snapshot.docs[0].data());
                } else {
                    setDados(null);
                }
            })
            .catch((error) => {
                console.error("Erro ao buscar dados:", error);
            });
    } else {
        setDados(null);
    }
}, [user]);

    return (
        <div className="container">
            <h1>Você logou com sucesso</h1>
            <h1>Seja muito Bem-vindo!</h1>
            <h4>Confira seus dados abaixo:</h4>

            {user && <p>Seu e-mail: {user.email} </p>}
            {dados && (
                <div>
                    <p>Seu Nome completo: {dados.nome} {dados.sobrenome}</p>
                    <p>Data de Nascimento: {dados.date_of_birth}</p>
                </div>
            )}
            {/* LogOut */}
            <button className="LogOut" 
                onClick={() => {
                    firebase.auth().signOut();
                    navigate("/");
                }}
            >
                Sair
                </button>
        </div>
    );    
}
export default Home;