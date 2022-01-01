import React from "react";
import { grommet, Box } from "grommet";

export const Background = () => {
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
      background="linear-gradient(#9200FC, #140025);"
    >
      {" "}
    </Box>
  );
};
