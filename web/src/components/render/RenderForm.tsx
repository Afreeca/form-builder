import { createElement, ReactNode } from "react"
import { FormContent } from "../../gql/queries/formQuery"
import { buildStyleObject } from "../../utils/buildStyles"

export const renderFormComponent = (form: FormContent): ReactNode => {
    // validate componenet before rendering
    return createElement(
        form.component,
        {
            id: form.id,
            key: form.id,
            type: form.type ?? null,
            name: form.name ?? null,
            for: form.for ?? null,
            className: form.className ?? null,
            style: form.styles ? buildStyleObject(form.styles) : null,
        },
        form.children ? renderChildren(form.children): null
        )
    }

const renderChildren = (children:  FormContent[] | string) => {
    return (
        children && ( typeof children === 'string'
            ? children
            : children.map((component: FormContent) => renderFormComponent(component))
        ) 
    )
}