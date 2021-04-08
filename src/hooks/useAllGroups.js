import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import Axios from 'axios'
import AllGroups from '../states/allGroups'

const useAllGroups = (option) => {
    const setAllgroups = useSetRecoilState(AllGroups)
    useEffect(async () => {
        const response = await Axios.get('http://localhost:5000/group/all') 
        setAllgroups(response.data)
    }, option)
}

export default useAllGroups