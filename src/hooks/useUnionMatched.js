import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import Axios from 'axios'
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'

const useUnionMatched = (searchBarID) => {
    const Files = useRecoilValue(matchedFiles(searchBarID))
    const [unionedFiles, setUnionedFiles] = useRecoilState(unionedMatched)
    const all = useRecoilValue(allFiles)
    console.log(all)
    useEffect(() => {
        let set = new Set([])
        all.forEach(arr => {
            set = new Set([...arr, ...set])
        })
        setUnionedFiles([...set])
    }, [Files])
}

export default useUnionMatched