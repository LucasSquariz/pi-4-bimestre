import { Link } from "react-router-dom";
import Card from "../Card";
import'./style.scss';

export default function CardCategoria() {    
    const categorias = [
        { id: 1, nome: "Apartamento", url: "https://betaimages.lopes.com.br/realestate/sml/REO297712/5CFACCDFF2BA3BF203708E56FEA3851B.JPG" },
        { id: 2, nome: "Casa", url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg" },
        { id: 3, nome: "Casa na praia", url: "https://s2.glbimg.com/ulqlv4AMKzTknUujSFXc0aGKQXI=/smart/e.glbimg.com/og/ed/f/original/2019/10/15/decoracao-casa-de-praia-8.jpg" },
        { id: 4, nome: "Flat", url: "https://2.bp.blogspot.com/-Y88zLeZOEi4/XEiZiWxm07I/AAAAAAAB710/MI-1p4EaXwoCOoP-qvByQZXoyd6JnhBXACLcBGAs/s1600/32290295-5aa6-4123-a51a-5a6470993415.jpg" },
    ]
    
    return (
        <>
        {/* ---- INICIO DO TESTE ---- */}        
        {/* ---- FIM DO TESTE ---- */}
        <h2 className="busca-categoria">Busca por categoria</h2>
            <div className="categorias"> {/*  --- Início das categorias --- */}
                {categorias.map((a) =>
                    <div key={a.id} >
                        <div className="card-categoria" onClick={() => console.log("olá")}>
                            <div className="img-categoria">
                                <img className="img-card-categoria" src={a.url} alt={a.nome}></img>
                            </div>
                            <div className="nome-categoria">
                                <p><strong>{a.nome}</strong></p>
                            </div>
                        </div>
                    </div>
                )}
            </div> {/*  --- Fim das categorias --- */}
        </>
    )
}

