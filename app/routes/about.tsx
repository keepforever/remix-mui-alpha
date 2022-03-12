import * as React from "react";
import { Link } from "remix";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import MyMenu from "~/src/components/MyMenu";

export default function About() {
  return (
    <React.Fragment>
      <Box>
        <MyMenu />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Remix with TypeScript example
      </Typography>
      <Button
        sx={{
          backgroundColor: ({ palette }) => palette.heliotrope.main,
        }}
        variant="contained"
        component={Link}
        to="/"
      >
        Go to the main page
      </Button>
    </React.Fragment>
  );
}
