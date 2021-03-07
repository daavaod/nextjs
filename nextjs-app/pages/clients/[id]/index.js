import { useRouter } from 'next/router'

const ClientProjectsPage = () => {

    const router = useRouter();

    function loadProjectHandler() {
        // do something
        // then navigate away

        // router.push('/clients/client-1/project-a')

        // object variant
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query : {
                id: 'client-one',
                clientprojectid: 'project-a'
            }
        })
    }

    return (
        <div>
            <h1>Projects Page for selected client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}
 
export default ClientProjectsPage;