import { useState } from 'react';

//porque usar error e set error se os dois sao null?????

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    function handleSubmit(e){
        e.preventDefault();
        setError(null);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            
                <label htmlFor="password">Password</label>
                <input type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}

            <button type='submit'>Login</button>
        </form>

    )
}

export default Login