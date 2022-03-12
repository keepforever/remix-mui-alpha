import * as React from "react";
import { Link } from "remix";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import MyMenu from "~/src/components/MyMenu";

import { useLoaderData, json } from "remix";

type LoaderData = Awaited<ReturnType<typeof getLoaderData>>;

async function getLoaderData() {
  const products = ["one", "two", "three"];
  return { products };
}

export const loader = async () => {
  return json<LoaderData>(await getLoaderData());
};

export default function About() {
  const product = useLoaderData<LoaderData>();

  return (
    <React.Fragment>
      <Box>
        <MyMenu />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Remix with TypeScript example
      </Typography>
      <pre>{JSON.stringify(product, null, 2) || "nothing to preview"}</pre>
      <Button variant="contained" component={Link} to="/">
        Go to the main page
      </Button>
    </React.Fragment>
  );
}
