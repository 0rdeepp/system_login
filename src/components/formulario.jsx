import { useState } from "react";
// Importa o hook, para criar estado no componente

function Formulario() {
    // Cria um estado "Form"
    // Vai começar como um campo com e-mail e senha vazios
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    // Funcao vai ser chamada sempre que o user digitar no input
    function handleChange(e) {
        // pega o "name" e o "value" do input
        const {name, value } = e.target;

        // Atualiza o estado
        setForm({
            ...form, // copia valores antigos
            [name]: value // atualiza o campo que mudou
        })
    }

    const [mensagem, setMensagem] = useState("");

    // Função chamada quando clicar em "Logar"
    function handleSubmit(e) {
        e.preventDefault();
        // evita a página recarregar
        console.log(form);

        if (form.email === "eduardo.lino@pucpr.br" && form.password === "123456") {
            setMensagem("Login Realizado com sucesso")
        } else {
           setMensagem("Dados incorretos, tente novamente")
        }
    }
    return (
        <form onSubmit={handleSubmit}>

            {/* campo input da email */}
        <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email"
        />

        {/* campo input da senha */}
        <input
            name="password"             // campo
            type="password"             // tipo
            value={form.password}       // valor vem do estado
            onChange={handleChange}     // chama funcao ao digitar
            placeholder="senha"
        />

        {/* botao para logar */}
        <button type="submit">Logar</button>
            <p>{mensagem}</p>
        </form>    
    )
}
// Exportanto para usar em outros arquivos
export default Formulario;