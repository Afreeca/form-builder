import { Styles } from "../gql/queries/formQuery"

export type BuildStyleProps = {
    [key: string]: string
}
  
export const buildStyleObject = (styles: Styles[]) => {
    let mappedStyles: BuildStyleProps = {}

    styles.forEach((property) => {
        mappedStyles[property.name] = property.value
    })

    return mappedStyles
}