import { gql, useQuery } from '@apollo/client'
import { FORM_FIELDS_FRAGMENT } from '../fragments/FormFieldFragment'

export type User = {
  fistName: string
  lastName: string
}

export type Styles = {
  name: string
  value: string
}

export type FormContent = {
  id: string
  component: string
  styles?: Styles
  className: string
  Children?: FormContent[]
}

export type Form = {
  id: string
  customer: User
  autor: User
  content: FormContent
}

export const GET_FORMS = gql`
${FORM_FIELDS_FRAGMENT}
  query getForms {
    forms{
        ...formFields
    }
  }
`

export const useForm = () => {
  const { loading, error, data } = useQuery<Form[]>(GET_FORMS)

  return {
    error: error,
    loading: loading,
    forms: data,
  }
}
