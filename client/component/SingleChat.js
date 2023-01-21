import { Box, Text, IconButton } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import getSender from "../config/ChatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";

const SingleChat = ({ UserContext,fetchAgain, setFetchAgain, AuthContext }) => {
  const user = localStorage.getItem("userInfo");
  const { selectedChat, setSelectedChat } = useContext(AuthContext);
    
//   setSelectedChat(JSON.parse(localStorage.getItem("selectedChat")));
  console.log(selectedChat);
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            d="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")} 
            />
            {!selectedChat.isGroupChat ? (
              <>{getSender(user, selectedChat.users)}
                <ProfileModal  />
              </>
            ) : (
              <>{selectedChat.chatName.toUpperCase()}</>
            )}
          </Text>
        </>
      ) : (
        <Box className="flex justify-center items-center h-[100%]">
          <Text className="3xl pb-3 font-sans">
            Click on a user to start Chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
