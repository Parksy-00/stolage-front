import React from 'react'
import { Select } from 'antd'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import 'antd/dist/antd.css'
import Axios from 'axios'
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import matchedFiles from '../../states/matchedFiles'

const TagSearch = (props) => {
    let canPick = useRecoilValue(recommandTags)
    const setFiles = useSetRecoilState(matchedFiles)

    canPick = canPick.map((item) => (<Select.Option key={item} value={item}>
                                        {item}
                                     </Select.Option>))

    const [selected, setSelected] = useRecoilState(selectedTags)

    console.log('selected')
    console.log(selected)
    console.log('--------------------')

    console.log('TagSearch')
    console.log(canPick)
    console.log('--------------------')

    function handleChange(newSelected) {
        setSelected(newSelected)

        const body = { selected: newSelected }

        Axios.post('http://localhost:5000/demo/search', body)
            .then(res => {
                const files = res.data
                console.log('files:', files)
                setFiles(files)
            })
    }

    return (
        <Select mode={props.option}
                style={{ width: '100%' }} 
                placeholder="태그를 입력하세요." 
                onChange={handleChange}
                value={selected}
                //notFoundContent옵션으로 컴포넌트 주면 
                //검색결과가 없을 때 출력 수정 가능
                >
                    
            {canPick}
        </Select>
    )
}
export default TagSearch