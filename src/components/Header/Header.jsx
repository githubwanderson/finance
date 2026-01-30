import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            template: (item) => (
                <Link to="/" className="p-menuitem-link">
                    <span className={item.icon}></span>
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        },
                {
            label: 'Expenses',
            icon: 'pi pi-wallet',
            template: (item) => (
                <Link to="/expenses" className="p-menuitem-link">
                    <span className={item.icon}></span>
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            template: (item) => (
                <Link to="/settings" className="p-menuitem-link">
                    <span className={item.icon}></span>
                    <span className="p-menuitem-text">{item.label}</span>
                </Link>
            )
        }
    ];

    return (
        <div>
            <Menubar model={items} />
        </div>
    )
}
        