import Router from "./components/Routers";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";
import { useState } from "react";

function App() {
  const auth = getAuth(app);

  //firebase auth가 인증되었으면 true로 변경해주는 로직 추가
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);
  return (
    <>
      <Router isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
