import React, { useState } from "react";
import "../styles/globals.css";
import { Context } from "../Context/ChatProvider.js";
import { ChakraProvider } from "@chakra-ui/react";
const AuthContext = React.createContext();

export default function App({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  return (
    <ChakraProvider>
      <AuthContext.Provider
        value={{
          isAuthenticated,
          setIsAuthenticated,
          chats,
          setChats,
          selectedChat,
          setSelectedChat,
        }}
      >
        <Component {...pageProps} AuthContext={AuthContext} />
      </AuthContext.Provider>
    </ChakraProvider>
  );
}
