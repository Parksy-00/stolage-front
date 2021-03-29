import { atom } from 'recoil'

const searchBarIDs = atom({
    key: 'searchBarIDs',
    default: [0],
})

export default searchBarIDs