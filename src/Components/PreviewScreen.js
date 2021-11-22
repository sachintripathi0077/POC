import React from 'react'
import {useState} from 'react'
import PreviewQuestion from './PreviewQuestion'


function PreviewScreen() {
    const [state, setstate] = useState([])

    const setPreviewState = (qState)=>{
        setstate(...state,qState)
        // console.log("Parent State:"+state)
    }
    return (
        <div>
            <PreviewQuestion type={'checkbox'} label={"This is a question label"} options={['a','b','c','d']} setPreviewState = {setPreviewState}/>
        </div>
    )
}

export default PreviewScreen
