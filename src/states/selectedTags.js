import { atom } from 'recoil'

const selectedTags = atom({
    key: 'selectedTags',
    default: [],
})

export default selectedTags