import { Form, unstable_createFileUploadHandler, unstable_parseMultipartFormData, useActionData, json } from 'remix'
import type { ActionFunction } from 'remix'
import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <div>
      <h1>My Upload Error Boundary</h1>
    </div>
  )
}

type ActionData = {
  errorMsg?: string
  imgSrc?: string
}

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = unstable_createFileUploadHandler({
    directory: 'public',
    maxFileSize: 3000000,
  })

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)
  const image: any = formData.get('img')
  if (!image) {
    return json({
      error: 'something wrong',
    })
  }
  return json({
    imgSrc: image.name,
  })
}

export default function Index() {
  const data = useActionData<ActionData>()
  const [objectUrl, setObjectUrl] = useState<any>(null)

  const preview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const frameElement = document.getElementById('preview-img') as HTMLImageElement
    const myObjectUrl = URL.createObjectURL(event?.target?.files?.[0] as any)

    setObjectUrl(myObjectUrl)
  }

  useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      console.log('\n', `hello cleanup preview `, '\n')
      URL.revokeObjectURL(objectUrl)
      setObjectUrl(null)
    }
  }, [data?.imgSrc])

  return (
    <Container maxWidth="md" sx={{ p: 3 }}>
      <Form method="post" encType="multipart/form-data">
        <input type="file" name="img" accept="image/*" onChange={preview} />
        <button type="submit">upload image</button>
      </Form>
      {data?.errorMsg && <h2>{data.errorMsg}</h2>}
      {data?.imgSrc && (
        <>
          <h2>uploaded image</h2>
          <img alt="uploaded" src={data.imgSrc} style={{ objectFit: 'contain', maxWidth: '100%' }} />
        </>
      )}
      <Box py={3}>
        <h3>Preview</h3>
        {objectUrl && <img id="preview-img" src={objectUrl} style={{ objectFit: 'contain', maxWidth: '100%' }} />}
      </Box>
    </Container>
  )
}
