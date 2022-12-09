import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { Form, useForm } from '../../gql/queries/formQuery'

interface Props {
  forms: Form[]
}

const ManageFormPage: FC<Props> = () => {
  const  {forms , loading, error}  = useForm()

  console.log("error: ", error)
  return (
    <Layout pageTitle='For Magement'>
       
    </Layout>
  )
}

export default ManageFormPage