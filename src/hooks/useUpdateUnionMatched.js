import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'

const useUpdateUnionMatched = (searchBarID) => {
    const Files = useRecoilValue(matchedFiles(searchBarID))
    const setUnionedFiles = useSetRecoilState(unionedMatched)
    const all = useRecoilValue(allFiles)

    useEffect(() => {
        if(Object.keys(all).length !== 0) {
            setUnionedFiles(Object.values(all))
        }
    }, [Files])
}

export default useUpdateUnionMatched