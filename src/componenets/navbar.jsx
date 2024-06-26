import './navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Navbar({isLogin , setLogin , showNavigation}){
    const navigate = useNavigate();
    const [accountInfo , setAccount] = useState('hideAccount');

    function accountHandler() {
        setAccount(prev => (prev === 'hideAccount' ? 'showAccount' : 'hideAccount'));
    }

    function removeDrop(){
        setAccount('hideAccount');
    }

    function logoutHandler(){
        setLogin(false);
        toast.success("Logout successfully");
        navigate('/home');
    }

    return(
        showNavigation ? (
        <div className="navbar">
        <Link to='/'>
            <h3 id='name'>QuizArena</h3>
        </Link>
                <nav>
                    <Link id='links' to='/'>
                        <h6 className='link'>Home</h6>
                    </Link> 
                    <Link id='links' to='/exam'>
                        <h6 className='link'>Challenge</h6>
                    </Link>
                    {
                        isLogin ? (    <div onMouseLeave={removeDrop} > 
                            <img id='user-account' src={require('../data/account.png')} alt='account' onClick={accountHandler}></img>
                            <div className={accountInfo}>
                                <p id="t" onClick={() => navigate('/dashboard')}>Dashboard</p>
                                <p onClick={() => navigate('/userInfo')}>Account</p>
                                <p onClick={logoutHandler}>Logout</p>
                            </div>
                        </div>
                        ) :
                        (
                            <div className = 'btn'>
                                <Link id='links' to='/login'><h6>Log In</h6></Link>
                                <Link id='links' to='/signin'><h6>Sign Up</h6></Link>
                            </div>
                        )
                    }
                </nav>
            </div>
        ) : (
            <></>
        )
    );
}
