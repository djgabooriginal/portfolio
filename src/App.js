import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Grommet,
    Header,
    Nav
} from "grommet";
import {theme} from "./theme";

function App() {
    return (
        <Grommet theme={theme}>
            <Header background="red" pad="small">
                <Avatar/>
                <Nav direction="row">
                    <Button primary/>
                </Nav>
            </Header>
        </Grommet>
    );
}

export default App;
