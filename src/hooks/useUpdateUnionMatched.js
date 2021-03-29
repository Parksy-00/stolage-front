import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'

const useUpdateUnionMatched = (searchBarID) => {
    const Files = useRecoilValue(matchedFiles(searchBarID))
    const setUnionedFiles = useSetRecoilState(unionedMatched)
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

export default useUpdateUnionMatched