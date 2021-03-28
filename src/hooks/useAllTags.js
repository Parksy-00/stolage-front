import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import Axios from 'axios'
import allTags from '../states/allTags'

const useAllTags = (option) => {
    const setAllTags = useSetRecoilState(allTags)
    useEffect(async () => {
        const response = await Axios.get('http://localhost:5000/demo/alltag') 
        setAllTags(response.data)
    }, option)
}

export default useAllTags