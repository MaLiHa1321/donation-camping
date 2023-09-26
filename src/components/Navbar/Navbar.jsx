import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <NavLink  to="/" style={{marginRight: "18px", fontSize: "20px"}}  className={({ isActive, isPending }) =>
                      isActive
                        ? "underline text-red-600 "
                        : isPending
                        ? "pending"
                        : ""
                    } > Home</NavLink>
        <NavLink  to="/donation" style={{marginRight: "18px", fontSize: "20px"}}  className={({ isActive, isPending }) =>
                      isActive
                        ? "underline text-red-600 "
                        : isPending
                        ? "pending"
                        : ""
                    }>Donation</NavLink>
        <NavLink  to="/statistics" style={{marginRight: "18px", fontSize: "20px"}} className={({ isActive, isPending }) =>
                      isActive
                        ? "underline text-red-600 "
                        : isPending
                        ? "pending"
                        : ""
                    }>Statistics</NavLink>
      </ul>
    </div>
    <a className="w-full"><img src="https://i.ibb.co/m98hvP7/Logo.png" alt="" /></a>
  </div>
  <div className="navbar-right hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <NavLink   to="/" style={{marginRight: "18px", fontSize: "20px"}}  className={({ isActive, isPending }) =>
                      isActive
                        ? "underline text-red-600 "
                        : isPending
                        ? "pending"
                        : ""
                    }>Home</NavLink>
        <NavLink  to="/donation" style={{marginRight: "18px", fontSize: "20px"}}  className={({ isActive, isPending }) =>
                      isActive
                        ? "underline text-red-600 "
                        : isPending
                        ? "pending"
                        : ""
                    }>Donation</NavLink>
        <NavLink  to="/statistics" style={{marginRight: "18px" ,fontSize: "20px"}} className={({ isActive, isPending }) =>
                      isActive
                        ? "underline text-red-600"
                        : isPending
                        ? "pending"
                        : ""
                    }>Statistics</NavLink>
    </ul>
  </div>
 
</div>
            
        </div>
    );
};



export default Navbar;