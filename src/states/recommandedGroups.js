import { selector } from 'recoil'
import matchedTags from './matchedTags'
import selectedGroups from './selectedGroups'
import allGroups from './allGroups'

const recommandedGroups = selector({
    key: 'recommandedGroups',
    get: ({get}) => {        
        const tags = get(matchedTags)
        const selected = get(selectedGroups)
        const defaultTags = get(allGroups)
        const unionWithOutDuplicate = 
                (acc, groups) => ([...new Set([...acc, ...groups])])

        if(tags.length === 0) return defaultTags

        return tags.map(_ => _.groups)
                    .reduce(unionWithOutDuplicate, new Set([]))
                    .filter(tag => !selected.includes(tag))
    }
})

export default recommandedGroups