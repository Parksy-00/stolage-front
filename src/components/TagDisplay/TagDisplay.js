import 'antd/dist/antd.css'
import { Tabs } from 'antd'
import React from 'react'
import TagsGrid from '../../components/TagsGrid/TagsGrid'
const { TabPane } = Tabs


const TagDisplay = ({searchBarID}) => {
    
    return (
        <Tabs defaultActiveKey='all' 
              style={ { height: 300 } }>

                <TabPane tab='All' 
                         key='all' 
                         style={ {overflowY: 'auto'} }>

                    <TagsGrid searchBarID={searchBarID} />
                </TabPane>

        </Tabs>
    )
};

export default TagDisplay
