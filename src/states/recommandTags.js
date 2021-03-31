import { selectorFamily } from 'recoil'
import matchedFiles from './matchedFiles'
import selectedTags from './selectedTags'
import allTags from './allTags'
import unionedMatched from './unionedMatch'

const recommandTags = selectorFamily({
    key: 'recommandTags',
    get: (searchBarID) => ({get}) => {        
        const files = get(matchedFiles(searchBarID))
        const selected = get(selectedTags(searchBarID))
        const defaultTags = get(allTags)
        const unionWithOutDuplicate = 
                (acc, tags) => ([...new Set([...acc, ...tags])])

        if(files.length === 0) return defaultTags

        return files.map(_ => _.tags)
                    .reduce(unionWithOutDuplicate, new Set([]))
                    .filter(tag => !selected.includes(tag))
    }
})

export default recommandTags