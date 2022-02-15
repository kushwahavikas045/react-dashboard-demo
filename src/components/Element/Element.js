import React from 'react'
import JsonInput from './JsonInput';
import JsonSelect from './JsonSelect';
const Element = ({field:{
    id,
    type,
    className,
    placeholder,
    value,
    children
}}) => {

    switch (type){
        case 'text':
            return (
            <JsonInput
            id={id}
            label = {placeholder}
            className = {className}
            value = {value}
            />)
        case 'select':
            return (
                <JsonSelect
                id = {id}
                label = {children[0].children}
                className = {className}
                option = {children}

                />
            )
        case 'submit':
            return (
                <JsonInput
                id = {id}
                className = {className}
                value = {value}
                />
            )
        default:
            return null;
    }

}

export default Element;