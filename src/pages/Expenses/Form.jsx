
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

export default function Form() {
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState(null);
    const [description, setDescription] = useState('');
    const [card, setCard] = useState(null);
    const [installment, setInstallment] = useState(null);
    const [amount, setAmount] = useState(null);
    const [paid, setPaid] = useState(false);

    const categories = [
        { label: 'Alimentação', value: 'Alimentação' },
        { label: 'Transporte', value: 'Transporte' },
        { label: 'Lazer', value: 'Lazer' }
    ];

    const cards = [
        { label: 'Visa', value: 'Visa' },
        { label: 'Mastercard', value: 'Mastercard' },
        { label: 'Elo', value: 'Elo' }
    ];

    const installments = [
        { label: 'DÉBITO', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ date, category, description, card, installment, amount, paid: paid ? 1 : 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid">
                <div className="col-4">
                    <div className="field">
                        <label htmlFor="date">Data</label>
                        <Calendar 
                            id="date" 
                            value={date} 
                            onChange={(e) => setDate(e.value)} 
                            dateFormat="dd/mm/yy" 
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="field">
                        <label htmlFor="category">Categoria</label>
                        <Dropdown 
                            id="category" 
                            value={category} 
                            options={categories} 
                            onChange={(e) => setCategory(e.value)} 
                            placeholder="Selecione uma categoria" 
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="field">
                        <label htmlFor="description">Descrição</label>
                        <InputText 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
            
            <div className="grid">
                <div className="col-4">
                    <div className="field">
                        <label htmlFor="card">Cartão</label>
                        <Dropdown 
                            id="card" 
                            value={card} 
                            options={cards} 
                            onChange={(e) => setCard(e.value)} 
                            placeholder="Selecione um cartão" 
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-2">
                    <div className="field">
                        <label htmlFor="installment">Parcela</label>
                        <Dropdown 
                            id="installment" 
                            value={installment} 
                            options={installments} 
                            onChange={(e) => setInstallment(e.value)} 
                            placeholder="Selecione a parcela" 
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="field">
                        <label htmlFor="amount">Valor</label>
                        <InputNumber 
                            id="amount" 
                            value={amount} 
                            onValueChange={(e) => setAmount(e.value)} 
                            mode="currency" 
                            currency="BRL" 
                            locale="pt-BR" 
                            className="w-full"
                        />
                    </div>
                </div>
                <div className="col-2">
                    <div className="field">
                        <label htmlFor="paid">Pago</label>
                        <div className="flex align-items-center">
                            <Checkbox 
                                id="paid" 
                                checked={paid} 
                                onChange={(e) => setPaid(e.checked)} 
                            />
                            <label htmlFor="paid" className="ml-2">
                                {paid ? 'Sim (1)' : 'Não (0)'}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="field" style={{ marginTop: '1rem' }}>
                <Button type="submit" label="Adicionar Despesa" icon="pi pi-plus" />
            </div>
        </form>
    );
}
