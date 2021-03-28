import { atom } from 'recoil'

const allTags = atom({
    key: 'allTags',
    default: ['']
})

export default allTags