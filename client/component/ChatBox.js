import { Box, Button, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import SingleChat from "./SingleChat";

const ChatBox = ({ UserContext, AuthContext, fetchAgain, setFetchAgain }) => {
  const { selectedChat, setSelectedChat } = useContext(AuthContext);

  // setSelectedChat(JSON.parse(localStorage.getItem("selectedChat")));
  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat
        UserContext={UserContext}
        AuthContext={AuthContext}
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
      />
    </Box>
  );
};
export default ChatBox;
