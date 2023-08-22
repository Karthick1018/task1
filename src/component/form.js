import React, { useState } from "react";
function Forms() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const userHandle = (e) => setUsername(e.target.value);
    const passHandle = (e) => setPassword(e.target.value);
    const submitHandle = (e) => {
        e.preventDefault()
        console.log(username + ' \n' + password);
    }


    return (
        <form className="App" onSubmit={submitHandle} style={{ display: 'grid', placeItems: 'center' }}>
            <h1>Login Form<br /> Task-4</h1>
            <div className="card p-5 bg-info" style={{ width: 350 }} >
                <div>
                    <label className="form-label">Username:</label>
                    <input type="text" value={username} required onChange={userHandle} />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" value={password} required onChange={passHandle} />
                </div><br />
                <div>
                    <button type="submit" class="btn btn-primary">Submit </button>
                </div>
            </div>
        </form>
    )

}
export default Forms;




