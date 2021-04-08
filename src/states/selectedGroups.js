import { atom } from 'recoil'

const selectedGroups = atom({
    key: 'selectedGroups',
    default: [],
})

export default selectedGroups