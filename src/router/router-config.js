import Default from '../pages/default'
import About from '../pages/about'
import Profiler from '../pages/profiler'

const routerConfig = [
    {
        path: '/',
        element: <Default />
    },
    {
        path: '/default',
        element: <Default />
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/profiler',
        element: <Profiler/>
    }
]

export default routerConfig;