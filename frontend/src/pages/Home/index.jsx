
// import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bem-vindo ao Sistema Financeiro</h1>
                <p>Gerencie suas finanças de forma simples e eficiente</p>
            </header>

            <section className="home-features">
                <div className="feature-card">
                    <h3>Receitas</h3>
                    <p>Registre suas receitas e acompanhe seus ganhos</p>
                </div>

                <div className="feature-card">
                    <h3>Despesas</h3>
                    <p>Controle seus gastos e organize suas finanças</p>
                </div>

                <div className="feature-card">
                    <h3>Relatórios</h3>
                    <p>Visualize relatórios detalhados das suas transações</p>
                </div>
            </section>
        </div>
    );
};

export default Home;