import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
export function Login() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Faça seu login.</h2>
                <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
                <Input placeholder="Senha" type="password" icon={FiLock}></Input>
                <Button title={"Entrar"}>
                    
                </Button>
                <a href="#">Criar conta</a>
            </Form>
            <Background></Background>
        </Container>
    )
}