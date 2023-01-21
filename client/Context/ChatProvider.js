import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

// const ChatContext = createContext();

// const ChatProvider = ({ children }) => {
//   const [user, setUser] = useState();
//   const router = useRouter();
//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//     setUser(user);

//     if (!user) router.push("/auth/login");
//   }, [router]);
//   return (
//     <ChatContext.Provider value={{ user, setUser }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const ChatState = () => {
//   return useContext(ChatContext);
// };

// export default ChatProvider;
export const Chats = createContext();

const Context = ({ children }) => {
  const [chats, setChats] = useState([]);
  return (
    <Chats.Provider value={{ chats, setChats }}>{children}</Chats.Provider>
  );
};

export default Context;
