import * as React from 'react'
import type { ActionFunction, MetaFunction } from 'remix'
import { Link } from 'remix'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/material'
import ContactForm from '~/src/components/ContactForm'

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

export const action: ActionFunction = async ({ request }) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  const formData = await request.formData()
  console.log('\n', `formData = `, formData, '\n')
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

  console.log('\n', `values = `, values, '\n')

  return { response: 'success' }
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <Box maxWidth={600} pt={2}>
      <Typography variant="h4" component="h1" gutterBottom>
        Remix with TypeScript example
      </Typography>

      <ContactForm />

      <Typography variant="h5" component="h1" gutterBottom mt={2}>
        This select input is outside the contact form but still provides its value by virtue of the <code>form</code>{' '}
        prop.
      </Typography>
    </Box>
  )
}
