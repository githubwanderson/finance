import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Table() {

    const customers = [
        {
            id: '1000',
            name: 'James Butt',
            country: { name: 'Algeria', code: 'dz' },
            company: 'Benton, John B Jr',
            representative: { name: 'Ioni Bowcher', image: 'ionibowcher.png' }
        },
        {   
            id: '1001',
            name: 'Josephine Darakjy',
            country: { name: 'Egypt', code: 'eg' },
            company: 'Chanay, Jeffrey A Esq',
            representative: { name: 'Amy Elsner', image: 'amyelsner.png' }
        }
    ];

    return (
        <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Name" style={{ width: '25%' }}></Column>
            <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
            <Column field="company" header="Company" style={{ width: '25%' }}></Column>
            <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
        </DataTable>
    )
}