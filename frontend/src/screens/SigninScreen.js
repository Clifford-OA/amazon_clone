import { createBrowserHistory } from 'history';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { signin } from '../actions/userActions';

const history = createBrowserHistory();

export default function SigninScreen() {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = history.location.search
        ? history.location.search.split('=')[1]
        : '/';

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;


    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        };
    }, [redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler} >
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor='email'>Email Address</label>
                    <input type="email" id="email" placeholder="Enter email"
                        required
                        onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" id="password" placeholder="Enter password"
                        required
                        onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'> Sign in
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        New custmer? {' '}
                        <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
