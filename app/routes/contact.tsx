import * as React from 'react'
import type { ActionFunction, MetaFunction } from 'remix'
import { Link } from 'remix'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/material'
import ContactForm from '~/src/components/ContactForm'
import sendEmail, { SendEmailArgs } from '~/src/utils/sendEmail'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const name = formData.get('poop')

  // get all formData values
  const values: {
    [key: string]: string
  } = {}
  for (const [key, value] of formData) {
    if (!!key && !!value) {
      values[key as string] = value as string
    }
  }

  try {
    // wait 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500))
    // await sendEmail(values as SendEmailArgs)
    return { response: 'success' }
  } catch (error) {
    console.log('\n', `error = `, error, '\n')
    return { response: 'error' }
  }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Box maxWidth={600} pt={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Email Form Proof of Concept
      </Typography>

      <ContactForm />
    </Box>
  )
}
