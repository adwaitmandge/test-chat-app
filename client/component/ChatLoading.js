import React, { useContext, useEffect, useState } from "react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";

const ChatLoading = () => {
  return (
    <div>
      <Stack>
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
        <Skeleton height="45px" />
      </Stack>
    </div>
  );
};

export default ChatLoading;
