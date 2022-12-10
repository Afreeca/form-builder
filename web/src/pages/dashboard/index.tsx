import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { FromCard } from '../../components/FormCard'
import { Layout } from '../../components/Layout'
import { Loading } from '../../components/Loading'
import { useForms } from '../../gql/queries/formQuery'

const ManageFormPage = () => { 
  const  {forms , loading, error}  = useForms()

  const router = useRouter()
  const handleOnFormClick = (formId: string) => {
    router.push(`dashboard/forms/${formId}`)
  }

  if(error){
    return <p> Server Error</p>
  }

  if(loading){
    return <Loading />
  }

  return (
    forms?.length > 0 
    ?  <Grid sx={{ flexGrow: 1 }} container spacing={2} m={2}>
        {forms.map((form) => (
          <Grid item>
            <FromCard formName={form.name} onClick={() => handleOnFormClick(form.id)} />
          </Grid>
        ))}
      </Grid>
    : <p>There is no forms created</p>)
}

ManageFormPage.getLayout = (page: ReactElement) => {
  return  <Layout>{page}</Layout>
}
  
export default ManageFormPage