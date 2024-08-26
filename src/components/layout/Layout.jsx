import Header from "./header/Header.jsx";

const Layout = ({children, backLink = '/'}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default Layout;