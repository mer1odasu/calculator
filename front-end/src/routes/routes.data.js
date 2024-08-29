import Home from "../components/screens/home/Home.jsx";
import Auth from "../components/screens/auth/Auth.jsx";
import Register from "../components/screens/auth/Register.jsx";
import Forgot from "../components/screens/auth/Forgot.jsx";
import Calculator from "../components/screens/calculator/Calculator.jsx";
import History from "../components/screens/history/History.jsx";
import Profile from "../components/screens/profile/Profile.jsx";


export const routes = [
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
			path: '/forgot-password',
			component: Forgot,
			isAuth: false
		},
		{
			path: '/',
			component: Home,
			isAuth: false
	},
    {
        path: '/calculator',
        component: Calculator,
        isAuth: false
    },
    {
        path: '/history',
        component: History,
        isAuth: false
    },
		{
			path: '/profile',
			component: Profile,
      isAuth: false
		}

]