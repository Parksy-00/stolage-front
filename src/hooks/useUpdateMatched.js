import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Axios from 'axios'
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from "../states/allFiles"

const useUpdateMatched = (newSelected, searchBarID) => {
    const setFiles = useSetRecoilState(matchedFiles(searchBarID))
    const [unionedFiles, setUnionedFiles] = useRecoilState(unionedMatched)
    const thisFile = useRecoilValue(matchedFiles(searchBarID))
    const [all, setAll] = useRecoilState(allFiles)

    useEffect(async () => {
        const body = { selected: newSelected }
        const response = await Axios.post('http://localhost:5000/demo/search', body)
        setFiles(response.data)    
        setAll([...all.slice(0, searchBarID), response.data, ...all.slice(searchBarID+1)])
    }, [newSelected, searchBarID])

}

export default useUpdateMatched
