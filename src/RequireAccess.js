import { useLocation } from 'react-router-dom';


export default function RequireAccess({children}) {
    let role = localStorage.getItem("role");
    const adminAccessPath = ["/poc","/pocdetails","/dashboard",
                                "/employeefields",
                                "/singlePocDetails",
                                "/worklogs",
                                "/poclist",
                                "/googledocs",
                                "/exceldocs",
                                "/benchlist",
                                "/addpoc",
                                "/editpoc",
                                "/benchworklogs",
                                "/editemployee",
                                "/newbenchEmployee",
                                "/editbenchEmployee",
                                "/empDetails",
                                "/workloglist"
                            ] 
    const resourceAccesPath = ["/workloglist","/newworklog"]
    const employeeAccessPath = [ "/editemployee",
                                    "/newbenchEmployee",
                                    "/editbenchEmployee"
                                ]
    const location = useLocation();  
    const pathname = location.pathname
    if(role === "admin" && adminAccessPath.find(p => pathname.startsWith(p)))
        return children;
    else if(role === "resource" && resourceAccesPath.find(p => pathname.startsWith(p)))
        return children;
    else if(role === "employee" && employeeAccessPath.find(p => pathname.startsWith(p)))
        return children;
    else
        return <>You dont have permission</>
}