import { atom } from 'recoil'

const matchedTags = atom({
    key: 'matchedTags',
    default: []
})

export default matchedTags
