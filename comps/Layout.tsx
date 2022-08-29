import NavbarComp from "./Navbar";

const Layout  = (props: any) => {
    return ( 
        <div className="content">
            <NavbarComp />
            {props.children}
        </div>
     );
}
 
export default Layout;