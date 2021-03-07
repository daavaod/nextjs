import Link from 'next/link'

const ClientsPage = () => {

    const clients = [
        { id: 'client-1', name: 'Client One' },
        { id: 'client-2', name: 'Client Two' },
    ];

    return (
        <div>
            <h1>Clients Page</h1>
            <ul>
                {
                    clients.map((client) => {
                        return (
                            <li key={client.id}>
                                {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}

                                {/* other way of building link href */}
                                <Link href={{
                                    pathname: '/clients/[id]',
                                    query: {
                                        id: client.id
                                    }
                                }}>{client.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
export default ClientsPage;