import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const clientId =
    "152002994517-gh56sigldrpab967601j6cre66rv0b22.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
};

export default App;
