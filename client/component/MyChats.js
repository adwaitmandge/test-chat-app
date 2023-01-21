import React, { useContext, useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import getSender from "../config/ChatLogics";
import { Chats } from "../Context/ChatProvider";
import GroupChatModal from "../component/miscellaneous/GroupChatModal";

const MyChats = ({ AuthContext, fetchAgain, setFetchAgain }) => {
  // const [selectedChat, setSelectedChat] = useState(
  //   JSON.parse(localStorage.getItem("selectedChat"))
  // );

  const { selectedChat, setSelectedChat } = useContext(AuthContext);

  const { chats, setChats } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const token = localStorage.getItem("token");
  const [loggedUser, setLoggedUser] = useState(user);
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const res = await fetch(`http://localhost:5000/chats`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "jwt-token": token },
      });

      const data = await res.json();
      setChats(data);
      console.log("Fetched all chats", data);
      localStorage.setItem("chats", data);
    } catch (err) {
      console.error(err.message);
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      className="flex flex-col p-3 bg-white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        className="font-sans flex"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <GroupChatModal AuthContext={AuthContext}>
          <Button
            d="flex"
            rightIcon={<AddIcon />}
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>
      <Box className="flex flex-col p-3 bg-[#f8f8f8] w-[100%] h-[100%] rounded-lg overflow-y-hidden">
        {chats ? (
          <Stack>
            {chats.map((chat) => (
              <Box
                onClick={() => {setSelectedChat(chat); localStorage.setItem("selectedChat",JSON.stringify(chat))}}
                cursor="pointer"
                bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
