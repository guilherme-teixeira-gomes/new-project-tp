
import { useCallback, useState } from 'react';




export const Dashboard = () => {

    const [lista, setLista] = useState<string[]>(['Teste1', 'Teste2', 'Teste3']);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';
            
            setLista((oldlista) => {

                if (oldlista.includes(value)) return oldlista;
                return [...oldlista, value];

            });
        }
    }, []);

    return (
       <div>
        <p>Listas</p>

        <input
        onKeyDown={handleInputKeyDown}
        />

        <ul>
           {lista.map((value) => {
                return <li key={value}>{value}</li>;
           })}
        </ul>

        </div>

    )

}