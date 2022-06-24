
import React, {useEffect, createContext, useContext} from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

const ViewContext = createContext()

export const useViewContext = () => useContext(ViewContext)

export const ViewContextProvider = ({children}) => {

    const {ref, inView} = useInView()
    const animation = useAnimation()

    useEffect(() => {
        if(!inView){
            animation.start({
                y: 20
            })
        } else {
            animation.start({
                y: 0,
                transition: {
                    duration: 0.5
                }
            })
        }
    }, [inView])

    return (
        <ViewContext.Provider value={[ref, animation]}>
            {children}
        </ViewContext.Provider>

    )

}