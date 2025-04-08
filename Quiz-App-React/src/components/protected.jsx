import Navbar from './navbar';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
    const user=localStorage.getItem('user');
    // console.log(user);


    return (
        <div>
           {
            user ? <Outlet /> : <Navigate to="/login" />
           }


        </div>
    );
}
export {Protected} ;

