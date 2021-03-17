import React from 'react'
import tagList from '../../TagManage/tags'
import { Space, Tag } from 'antd'
import { useRecoilState } from 'recoil';
import 'antd/dist/antd.css'

const TagDisplay = () => {
    let [list, setlist] = useRecoilState(tagList);

    function deleteTag(index) {
        setlist([
            ...list.slice(0, index),
            ...list.slice(index + 1, list.length)
        ])
    }   
    return (
        <Space size={[4, 4]} wrap>
            {list.map((name, index) => (
            <Tag closable onClose={() => deleteTag(index)}>{name.value}</Tag>
            ))} 
        </Space>
    )
};

export default TagDisplay