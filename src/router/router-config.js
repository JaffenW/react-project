import Default from '../pages/default'
import Management from '../pages/management'
import Profiler from '../pages/profiler'

const routerConfig = [
    {
        path: '/',
        element: <Default />
    },
    {
        path: 'default',
        element: <Default />
    },
    {
        path: 'management',
        element: <Management/>
    },
    {
        path: 'profiler',
        element: <Profiler/>
    }
]

export default routerConfig;