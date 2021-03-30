import { useEffect } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import matchedFiles from '../states/matchedFiles'
import unionedMatched from "../states/unionedMatch"
import allFiles from '../states/allFiles'
import searchBarIDs from "../states/searchBarIDs"

const useUpdateUnionMatched = (currentID) => {
    const filesByID = useRecoilValue(matchedFiles(currentID))
    const setUnionedFiles = useSetRecoilState(unionedMatched)
    const all = useRecoilValue(allFiles)
    const IDs = useRecoilValue(searchBarIDs)

    useEffect(() => {
        if(Object.keys(all).length !== 0) {
            const files = Object.values(all).flat(1)

            let ret = []
            const set = new Set()
            files.forEach(file => {
                if(!set.has(file.name)) {
                    set.add(file.name)
                    ret = [...ret, file]
                }
            })
            setUnionedFiles(ret)
        }
    }, [filesByID, IDs])
}   

export default useUpdateUnionMatched