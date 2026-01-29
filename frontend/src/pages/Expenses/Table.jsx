import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Table() {

    const customers = [
        { id: 1, date: '2024-01-15', category: 'Alimentação', description: 'Supermercado', card: 'Visa', installment: '1/1', amount: 'R$ 250,00', paid: 1, user: 'João Silva' },
        { id: 2, date: '2024-01-18', category: 'Transporte', description: 'Combustível', card: 'Mastercard', installment: '1/1', amount: 'R$ 180,00', paid: 0, user: 'Maria Santos' },
        { id: 3, date: '2024-01-20', category: 'Lazer', description: 'Cinema', card: 'Elo', installment: '2/3', amount: 'R$ 45,00', paid: 1, user: 'Pedro Costa' }
    ];

    return (
        <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="ID" style={{ width: '25%' }}></Column>
            <Column field="date" header="Data" style={{ width: '25%' }}></Column>
            <Column field="category" header="Categoria" style={{ width: '25%' }}></Column>
            <Column field="description" header="Descrição" style={{ width: '25%' }}></Column>
            <Column field="card" header="Cartão" style={{ width: '25%' }}></Column>
            <Column field="installment" header="Parcela" style={{ width: '25%' }}></Column>
            <Column field="amount" header="Valor" style={{ width: '25%' }}></Column>
            <Column field="paid" header="Pago" style={{ width: '25%' }}></Column>
            <Column field="user" header="Usuário" style={{ width: '25%' }}></Column>
        </DataTable>
    )
}