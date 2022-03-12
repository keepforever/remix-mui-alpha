import { redirect, useActionData, Form, useTransition } from "remix";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

type MyResponse = {
  response: string;
};

export default function ContactForm() {
  const actionData = useActionData<MyResponse>();
  const transition = useTransition();

  console.log("\n", `actionData = `, actionData, "\n");
  return (
    <Form id="my-contact-form" method="post">
      <fieldset
        style={{ border: "none", margin: 0, padding: 0 }}
        disabled={actionData?.response === "success"}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="email"
          label="Email"
          name="email"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="subject"
          label="Subject"
          name="subject"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </fieldset>
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </Box>
    </Form>
  );
}
