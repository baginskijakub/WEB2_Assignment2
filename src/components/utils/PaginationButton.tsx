import React from 'react'
import '../components.css'

interface Props{
    pageNumber: number
    onClick: () => void
}
export const PaginationButton:React.FC<Props> = ({pageNumber, onClick}) => {


    return (
        <button className='pagination-button' onClick={onClick}>{pageNumber}</button>
    )
}