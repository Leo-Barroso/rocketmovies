import { Container, Profile } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Input } from "../Input";
export function Header() {
    return (
        <Container>
            <h1>RocktMovies</h1>
            <div>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}></Input>
            </div>
            <Profile>
                <div>
                    <strong>Leo Barroso</strong>
                    <span>Sair</span>
                </div>
                <img 
                    src="https://github.com/Leo-Barroso.png" 
                    alt="Foto do perfil do usuário" 
                />
            </Profile>
        </Container>
    )
}