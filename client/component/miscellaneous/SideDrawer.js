import React, { useContext, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import ChatLoading from "../ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Tooltip,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Input,
  useToast,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spinner,
} from "@chakra-ui/react";
import { Search2Icon, BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Router, useRouter } from "next/router";
import ProfileModal from "./ProfileModal";
import { useDisclosure } from "@chakra-ui/hooks";
import { Chats } from "../../Context/ChatProvider";

function SideDrawer({ UserContext, AuthContext }) {
  const { user, setUser } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { chats, setChats } = useContext(AuthContext);
  // const [selectedChat, setSelectedChat] = useState();
  const {selectedChat, setSelectedChat} = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    router.push("/");
  };

  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      setLoading(true);
      const res = await fetch(`http://localhost:5000/user?search=${search}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "jwt-token": token },
      });

      const data = await res.json();
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      console.log("Showing the chat with id", userId);
      const body = JSON.stringify(userId);
      const token = localStorage.getItem("token");
      console.log("The token is ", token);
      setLoadingChat(true);
      console.log("Making a post request now");

      const { data } = await axios.post(
        "http://localhost:5000/chats",
        { userId },
        {
          headers: { "Content-Type": "application/json", "jwt-token": token },
        }
      );
      console.log("After the request");
      console.log(data);
      const temp = JSON.stringify([...chats, data]);
      localStorage.setItem("chats", temp);
      setChats([data, ...chats]);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      localStorage.setItem("selectedChat", JSON.stringify(data));
      setLoadingChat(false);
      onClose();
    } catch (error) {
      console.log("Oh no eeeeerrr");
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box className="flex justify-between items-center bg-white w-[100%] py-[5px] px-[10px]">
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <Search2Icon />
            <Text d={{ base: "none", md: "flex" }} px={"4"}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text className="text-2xl">Thesis Management System</Text>
        <div>
          <Menu>
            <MenuButton className="p-1">
              <BellIcon className="text-2xl m-1" />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              className="p-1"
            >
              <Avatar size="sm" cursor="pointer" name={user.username} />
            </MenuButton>
            <MenuList>
              <ProfileModal UserContext={UserContext}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box className="flex pb-2">
              <Input
                placeholder="Search by name or email"
                className="mr-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={async () => await accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner className="flex ml-auto" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
