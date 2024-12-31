import React, { useState, useEffect } from "react";
import {
  IconButton,
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // Prize Icon

const RewardIcon = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 1.5 : 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseLeave = () => {
    setScale(1);
  };

  return (
    <>
      

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          marginTop:'2rem'
        }}
      >
        <IconButton
          onMouseLeave={handleMouseLeave}
          sx={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease-in-out",
            fontSize: 100,
            color: "gold",
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
      </Container>
    </>
  );
};

export default RewardIcon;
