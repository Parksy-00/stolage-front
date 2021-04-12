import 'antd/dist/antd.css'
import { Space, Tag, Tabs } from 'antd'
import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import SelectedTags from '../../states/selectedTags'
import RecommandedTags from '../../states/recommandedTags'
const { TabPane } = Tabs


const TagDisplay = ({searchBarID}) => {
    const [selectedTags, setSelectedTags] = useRecoilState(SelectedTags(searchBarID))
    const recommandedTags = useRecoilValue(RecommandedTags(searchBarID))

    const updateSelected = (index) => {
        const newSelected = [
            ...selectedTags,
            recommandedTags[index]
        ]
        setSelectedTags(newSelected)
    }

    return (
        <Tabs defaultActiveKey='all' 
              style={ { height: 300 } }>

                <TabPane tab='All' 
                         key='all' 
                         style={ {overflowY: 'auto'} }>

                    <Space size={[8, 16]} wrap>
                        {recommandedTags.map((name, index) => (
                            <Tag color="geekblue" 
                                 key={name} 
                                 onClick={() => updateSelected(index)} 
                                 style={{cursor:"pointer"}}>
                                     
                                {name} 
                            </Tag>
                        ))}
                    </Space>
                </TabPane>

        </Tabs>
    )
};

export default TagDisplay
