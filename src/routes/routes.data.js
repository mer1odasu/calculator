import Home from "../components/screens/home/Home.jsx";
import Auth from "../components/screens/auth/Auth.jsx";
import Register from "../components/screens/auth/Register.jsx";
import Status from "../components/screens/status/Status.jsx";
import Apply from "../components/screens/apply/Apply.jsx";


export const routes = [
    {
        path: '/',
        component: Home,
        isAuth: false
    },
    {
        path: '/auth',
        component: Auth,
        isAuth: false
    },
		{
			path: '/register',
			component: Register,
			isAuth: false
		},
    {
        path: '/status',
        component: Status,
        isAuth: true
    },
    {
        path: '/apply',
        component: Apply,
        isAuth: true
    },

]