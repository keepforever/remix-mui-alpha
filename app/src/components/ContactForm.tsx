import { useRef, useEffect } from 'react'
import { useActionData, Form, useTransition } from 'remix'
import { TextField, Button, Box, Autocomplete, Typography } from '@mui/material'

type MyResponse = {
  response: string
}

const useResetForm = () => {}

export default function ContactForm() {
  const actionData = useActionData<MyResponse>()
  const transition = useTransition()
  const formRef = useRef<HTMLFormElement>(null)
  const nameInputRef = useRef<HTMLInputElement>(null)
  const autocompleteRef = useRef<HTMLInputElement>(null)
  const isSubmitting = transition.state === 'submitting' && transition.submission.formData.get('_action') === 'create'

  useEffect(() => {
    if (!isSubmitting) {
      // reset form values
      formRef?.current?.reset()
      // clear auto complete
      const clearButton = document.querySelector('[title="Clear"]') as HTMLButtonElement
      clearButton?.click()
      // set focus on first input
      nameInputRef?.current?.focus()
    }
  }, [isSubmitting])

  return (
    <>
      {isSubmitting && (
        <Box py={3}>
          <Typography variant="h4" component="h1" gutterBottom>
            Submitting...
          </Typography>
        </Box>
      )}
      <Form ref={formRef} id="my-contact-form" method="post">
        <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
          <TextField
            inputRef={nameInputRef}
            id="name"
            name="name"
            label="Name"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField id="email" label="Email" name="email" margin="normal" variant="outlined" fullWidth />

          <TextField id="phone" label="Phone" name="phone" margin="normal" variant="outlined" fullWidth />
          <Autocomplete
            ref={autocompleteRef}
            itemRef="practiceArea"
            fullWidth
            disablePortal
            id="practiceArea"
            options={['one', 'two', 'three']}
            renderInput={params => <TextField {...params} label="Practice Area" name="practiceArea" />}
          />

          <TextField
            id="message"
            name="message"
            label="Message"
            margin="normal"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
          />
        </fieldset>
        <Box mt={2}>
          <Button name="_action" value="create" type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Form>
    </>
  )
}
