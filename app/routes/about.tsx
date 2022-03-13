import * as React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

import { useLoaderData, json } from 'remix'

type LoaderData = Awaited<ReturnType<typeof getLoaderData>>

async function getLoaderData() {
  const products = ['one', 'two', 'three']
  return { products }
}

export const loader = async () => {
  return json<LoaderData>(await getLoaderData())
}

export default function About() {
  const product = useLoaderData<LoaderData>()

  return (
    <React.Fragment>
      <Box p={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Remix with TypeScript example
        </Typography>
        <pre>{JSON.stringify(product, null, 2) || 'nothing to preview'}</pre>
      </Box>
    </React.Fragment>
  )
}
