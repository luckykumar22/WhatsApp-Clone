import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'

const Component = styled(Box)`
  display: flex;
`;

const QRcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 28px;
  color: #41525d;
  font-weight: 200;
  font-family: inherit;
`;

const StyledList = styled(List)`
  & > li {
    margin-top: 30px;
    padding: 0;
    font-size: 18px;
    line-height: 20px;
    color: #3b4a54;
  }
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Dialogstyle = {
  height: "95%",
  width: "65%",
  marginTop: "10%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {
  const onLoginSuccess = (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);

  };

  const onLoginError = (res) => {
    console.log("Error Login", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: Dialogstyle }}>
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>3. Tap on a Link a Device</ListItem>
            <ListItem>
              4. Point your phone to this screen to capture this QR code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{position:'relative'}}>
          <QRcode src={qrCodeImage} alt="QR" />
          <Box style={{position:'absolute', top:'50%', transform: 'translateX(30%)'}} >
            <GoogleLogin 
            onSuccess={onLoginSuccess} 
            onError={onLoginError} 
            />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
