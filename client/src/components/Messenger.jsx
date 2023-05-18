import { AppBar, Box, Toolbar } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import styled from "@emotion/styled";

const Component =styled(Box)`
    background-color: #f0f2f5;
`

const Header = styled(AppBar)`
  height: 210px;
  background-color: #00a884;
  box-shadow: none;

`;
const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
