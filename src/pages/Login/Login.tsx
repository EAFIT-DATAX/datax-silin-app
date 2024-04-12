import React, { useState } from "react";

import { StyledLogin } from "./LoginStyles";

import LoginContainer from "../../containers/LoginContainer";

const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <StyledLogin container justifyContent="center" alignItems="center">
            <LoginContainer
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
            />
        </StyledLogin>
    );
}

export default Login;
