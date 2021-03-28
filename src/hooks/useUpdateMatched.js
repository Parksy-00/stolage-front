import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import Axios from 'axios'
import matchedFiles from '../states/matchedFiles'

const useUpdateMatched = newSelected => {
    const setFiles = useSetRecoilState(matchedFiles)

    useEffect(async () => {
        const body = { selected: newSelected }
        const response = await Axios.post('http://localhost:5000/demo/search', body)

        setFiles(response.data)    
    }, [newSelected])
}

export default useUpdateMatched
