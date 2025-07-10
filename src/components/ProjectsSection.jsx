import styles from "../pages/Home/Home.module.css";
import VisseVei from "../assets/Visse-Vei.svg";
import OKRBB from "../assets/OKR.BB.svg";
import TeArt from "../assets/TeArt.svg";
import CadastroUsuarios from "../assets/CadastroUsuarios.svg";
import AstroTask from "../assets/AstroTask.svg";

export default function ProjectsSection() {
    return (
        <section id='Projects' className={styles.projectsContainer}>
            <h1 className={styles.projectsTitle}>Projects</h1>

            <div className={styles.projectsCards}>
                <div className={styles.projectCard}>
                    <h3>Visse,Véi?</h3>
                    <a href="https://www.linkedin.com/posts/isis-marieli-9a350225b_kickoff2024-cultura-economia-activity-7269537006995591168-Jllp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_3_wsB3PbuXbnsiLbU1JodGrrvxzY8nts" target="_blank" rel="noopener noreferrer"><img className={styles.Imgs} src={VisseVei} alt="Visse, Véi?" /></a>
                    <p>É um projeto de um aplicativo que combate a invisibilidade cultural do interior de Pernambuco, promovendo artistas locais e fortalecendo a economia criativa por meio de um mapa interativo, marketplace e ações de inclusão digital.</p>
                    <div className={styles.typeProjectWrapper}>
                        <button className={styles.typeProject}>UX/UI Design</button>
                        <button className={styles.typeProject}>Residência Tecnológica</button>

                    </div>
                </div>
                <div className={styles.projectCard}>
                    <h3>OKR.BB</h3>
                    <a href="https://plataforma-okr-bb.vercel.app/" target="_blank" rel="noopener noreferrer"><img className={styles.Imgs} src={OKRBB} alt="OKR.BB" /></a>
                    <p>Com o objetivo de transformar a gestão de OKRs e KPIs da alta diretoria do Banco do Brasil. A plataforma oferece dashboard centralizado, automação de alertas, formulários inteligentes e relatórios gerenciais.
                        Tive participação ativa no UX/UI Design, e desenvolvimento front-end junto com Adilson Pedro, enquanto Leonardo Reis foi responsável pelo back-end.</p>
                    <div className={styles.typeProjectWrapper}>
                        <button className={styles.typeProject}>UX/UI Design</button>
                        <button className={styles.typeProject}>FullStack</button>
                        <button className={styles.typeProject}>Residência Tecnológica</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <h3>TeArt</h3>
                    <a href="https://www.figma.com/proto/GdqZuXBeLfUxsAWUF13DGd/TeArt?page-id=0%3A1&node-id=6-571&p=f&t=81egqLb946AwG8IW-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A571" target="_blank" rel="noopener noreferrer"><img className={styles.Imgs} src={TeArt} alt="TeArt" /></a>
                    <p>Um aplicativo que oferece uma jornada eficiente e transparente na gestão de eventos culturais. Desde a consulta de espaços disponíveis e solicitação de locação online, até o acompanhamento de aprovações, promoção do evento e acesso a dados de desempenho, a plataforma centraliza todas as etapas em um só lugar.</p>
                    <div className={styles.typeProjectWrapper}>
                        <button className={styles.typeProject}>UX/UI Design</button>
                        <button className={styles.typeProject}>Projeto Acadêmico</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <h3>Gestão de Usuários</h3>
                    <a href="https://github.com/IsisMarieli/Isis-Marieli-Desafio-Tecnico" target="_blank" rel="noopener noreferrer"><img className={styles.Imgs} src={CadastroUsuarios} alt="Cadastro de Usuários" /></a>
                    <p>Projeto desenvolvido como parte de um desafio técnico, com foco na aplicação de boas práticas de desenvolvimento e organização de código. A solução foi estruturada em duas camadas principais: Frontend e Backend, integradas por meio de uma API REST.
                        O sistema permite o cadastro, edição e remoção de usuários, garantindo comunicação eficiente entre as camadas e organização modular do código.</p>
                    <div className={styles.typeProjectWrapper}>
                        <button className={styles.typeProject}>Desafio Técnico</button>
                        <button className={styles.typeProject}>FullStack</button>
                    </div>
                </div>
                <div className={styles.projectCard}>
                    <h3>AstroTask</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer"><img className={styles.Imgs} src={AstroTask} alt="AstroTask" /></a>
                    <p>Um aplicativo inteligente que cria listas de tarefas automaticamente com base em temas personalizados, como estudos, autocuidado, rotina doméstica, trabalho e metas pessoais. O app sugere tarefas práticas, bem divididas e com foco em produtividade, ajudando o usuário a organizar sua vida de forma leve e eficiente.</p>
                    <div className={styles.typeProjectWrapper}>
                        <button className={styles.typeProject}>UX/UI Design</button>
                        <button className={styles.typeProject}>Projeto Acadêmico</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

