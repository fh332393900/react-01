import NestedRoute from "./NestedRoute";
import App from '../App';
import Home from '../Home'
const router = [
    {
        path:'/',
        component: App
    },
    {
        path:'/home',
        component: Home
    }
];
export default router;

export {
    NestedRoute
}