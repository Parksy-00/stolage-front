import React from 'react'
import { Space, Tag } from 'antd'
import 'antd/dist/antd.css'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil'
import selectedTags from '../../states/selectedTags'
import recommandTags from '../../states/recommandTags'
import matchedFiles from '../../states/matchedFiles'
import Axios from 'axios'

const TagDisplay = () => {
    const [selected, setSelected] = useRecoilState(selectedTags)
    const setFiles = useSetRecoilState(matchedFiles)
    const list = useRecoilValue(recommandTags)
    console.log('tagsDisplay')
    console.log(list)
    console.log('--------------------')
    const onClick = (e, i) => {
        let newSelected = [
            ...selected,
            list[i]
        ]
        setSelected(() => newSelected)

        const body = { selected: newSelected}
        Axios.post('http://localhost:5000/demo/search', body)
            .then(res => {
                const files = res.data
                console.log("files:", files)
                setFiles(files)
            })
    }

    return (
        <Space size={[8, 16]} wrap>
            {list.map((name, index) => (
                //<Tag closable onClose={() => deleteTag(name)}>{name}</Tag>
                <Tag key={index} onClick={(e) => onClick(e, index)} style={{cursor:"pointer"}}>{name}</Tag>
            ))}
        </Space>
    )
};

export default TagDisplay