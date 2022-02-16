import React, { Component } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

export default class Login extends Component {
    render(){
        return(
            <Authenticator socialProviders={['google']}>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.username}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
            </Authenticator>
        );
    }
}