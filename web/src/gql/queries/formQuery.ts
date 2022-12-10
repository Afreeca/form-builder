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
  styles?: Styles[]
  type?: string
  name?: string
  for?: string
  className: string
  children?: FormContent[] | string
}

export type Form = {
  id: string
  name: string
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

export const GET_FORM = gql`
${FORM_FIELDS_FRAGMENT}
  query getForm($formId: String!) {
    form(formId: $formId){
        ...formFields
        content
    }
  }
`

export const useForms = () => {
  const { loading, error, data } = useQuery<{forms:Form[]}>(GET_FORMS)

  return {
    error: error,
    loading: loading,
    forms: data?.forms || [],
  }
}


export const useForm = (formId: string) => {
  const { loading, error, data } = useQuery<{form:Form}>(GET_FORM, {
    variables: { formId }
  })


  return {
    error: error,
    loading: loading,
    form: data?.form,
  }
}