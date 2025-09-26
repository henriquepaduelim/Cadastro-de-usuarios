import React, { Component } from "react";
import Main from "../../template/Main";

const headerProps = { 
    icon: 'users',
    title: 'Club Managers',
    subtitle: 'Register your athletes.'

}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Club Managers
            </Main>
        )
    }

}