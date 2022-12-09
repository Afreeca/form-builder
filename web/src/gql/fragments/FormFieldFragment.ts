import { gql } from '@apollo/client'

export const FORM_FIELDS_FRAGMENT = gql`
  fragment formFields on Form {
    id
    customer { 
      fistName
      lastName
    }
    autor { 
      fistName
      lastName
    }
    content
  }
`