import React from 'react'
import JsonButton from './JsonButton';
import JsonInput from './JsonInput';
import JsonSelect from './JsonSelect';
const Element = ({field:{
    id,
    type,
    className,
    placeholder,
    label,
    name,
    value,
    children
}}) => {

    switch (type){
        case 'text':
            return (
            <JsonInput
            id={id}
            label = {label}
            placeholder = {placeholder}
            name={name}
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
                <JsonButton
                id = {id}
                type={type}

                />
            )
        default:
            return null;
    }

}

export default Element;