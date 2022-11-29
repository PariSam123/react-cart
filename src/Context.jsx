import React, { createContext } from 'react'
import useProduct from './Api/ProjectApi'

//creating context reference
export const DataContext = createContext()

//Super component
function DataProvider(props) {
    const data ={
        productApi: useProduct()
    }
  return (
    <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider>
  )
}

export default DataProvider
