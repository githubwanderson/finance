import { useState } from 'react';
// import './styles.css';

export default function Settings() {
    const [activeTab, setActiveTab] = useState('accounts');

    const [accountData, setAccountData] = useState({
        name: '',
        type: '',
        balance: ''
    });

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [cardData, setCardData] = useState({
        name: '',
        number: '',
        limit: '',
        dueDate: ''
    });

    const handleAccountSubmit = (e) => {
        e.preventDefault();
        console.log('Account:', accountData);
        // Adicione aqui a lógica para enviar os dados da conta
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        console.log('User:', userData);
        // Adicione aqui a lógica para enviar os dados do usuário
    };

    const handleCardSubmit = (e) => {
        e.preventDefault();
        console.log('Card:', cardData);
        // Adicione aqui a lógica para enviar os dados do cartão
    };

    return (
        <div className="settings-container">
            <h1>Configurações</h1>

            <div className="tabs">
                <button
                    className={activeTab === 'accounts' ? 'active' : ''}
                    onClick={() => setActiveTab('accounts')}
                >
                    Contas
                </button>
                <button
                    className={activeTab === 'users' ? 'active' : ''}
                    onClick={() => setActiveTab('users')}
                >
                    Usuários
                </button>
                <button
                    className={activeTab === 'cards' ? 'active' : ''}
                    onClick={() => setActiveTab('cards')}
                >
                    Cartões
                </button>
            </div>

            <div className="content">
                {activeTab === 'accounts' && (
                    <form onSubmit={handleAccountSubmit}>
                        <h2>Cadastrar Conta</h2>
                        <input
                            type="text"
                            placeholder="Nome da conta"
                            value={accountData.name}
                            onChange={(e) => setAccountData({ ...accountData, name: e.target.value })}
                            required
                        />
                        <select
                            value={accountData.type}
                            onChange={(e) => setAccountData({ ...accountData, type: e.target.value })}
                            required
                        >
                            <option value="">Selecione o tipo</option>
                            <option value="checking">Conta Corrente</option>
                            <option value="savings">Poupança</option>
                            <option value="investment">Investimento</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Saldo inicial"
                            value={accountData.balance}
                            onChange={(e) => setAccountData({ ...accountData, balance: e.target.value })}
                            required
                        />
                        <button type="submit">Cadastrar Conta</button>
                    </form>
                )}

                {activeTab === 'users' && (
                    <form onSubmit={handleUserSubmit}>
                        <h2>Cadastrar Usuário</h2>
                        <input
                            type="text"
                            placeholder="Nome completo"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                            required
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                            required
                        />
                        <button type="submit">Cadastrar Usuário</button>
                    </form>
                )}

                {activeTab === 'cards' && (
                    <form onSubmit={handleCardSubmit}>
                        <h2>Cadastrar Cartão</h2>
                        <input
                            type="text"
                            placeholder="Nome do cartão"
                            value={cardData.name}
                            onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Últimos 4 dígitos"
                            value={cardData.number}
                            onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                            maxLength="4"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Limite"
                            value={cardData.limit}
                            onChange={(e) => setCardData({ ...cardData, limit: e.target.value })}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Dia de vencimento"
                            value={cardData.dueDate}
                            onChange={(e) => setCardData({ ...cardData, dueDate: e.target.value })}
                            min="1"
                            max="31"
                            required
                        />
                        <button type="submit">Cadastrar Cartão</button>
                    </form>
                )}
            </div>
        </div>
    );
}