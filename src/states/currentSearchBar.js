import { atom } from 'recoil'

const currentSearchBar = atom({
    key: 'currentSearchBar',
    default: 0
})

export default currentSearchBar
