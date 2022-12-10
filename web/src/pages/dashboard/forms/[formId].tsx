import { Box, Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import {ArrowCircleLeftOutlined } from '@mui/icons-material/';
import { Layout } from '../../../components/Layout'
import { Loading } from '../../../components/Loading'
import { renderFormComponent } from '../../../components/render/RenderForm'
import { useForm } from '../../../gql/queries/formQuery'


const ViewForm = () => { 
  const router = useRouter()
  const formId =  router.query.formId as string
  const  {form , loading, error}  = useForm(formId)

  if(error){
    return <p> Server Error</p>
  }

  if(loading){
    return <Loading />
  }

  const handleGoBack = () => router.back()

  return (<Box m={2}>
          <Button 
            variant="contained" 
            startIcon={<ArrowCircleLeftOutlined />} 
            sx={{mb:2}}
            onClick={handleGoBack}
          >
            Go Back
          </Button>
          <Stack  sx={{mb:2}}>
            <Typography variant="h6" color="primary" component="div">
              {`Form: ${form?.name}`}
            </Typography>
          </Stack>
         
          {form ? renderFormComponent(form.content) : <p>Form empty</p>}
      </Box>
  )
}

ViewForm.getLayout = (page: ReactElement) => {
  return  <Layout>{page}</Layout>
}
  
export default ViewForm