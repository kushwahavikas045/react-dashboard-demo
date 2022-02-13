import React from 'react'

const TableError = ({title}) => {
    return (
        <tbody>
            <tr>
                <td colSpan="4" className='table-error'>
                    {title}</td>
            </tr>
        </tbody>
    )
}

export default TableError