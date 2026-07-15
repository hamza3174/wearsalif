import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontened from './Frontened'

const index = () => {
    return (
        <Routes>
            <Route path='/*' element={<Frontened />} />
        </Routes>
    )
}

export default index
