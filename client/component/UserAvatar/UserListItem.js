import React, { useContext, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      className="flex items-center bg-[#e8e8e8] text-white cursor-pointer"
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}  
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.username}
        src={user.pic}
      />
      <Box>
        <Text>{user.username}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
