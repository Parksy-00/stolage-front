import 'antd/dist/antd.css';
import { Divider } from 'antd';
import { useRecoilValue } from "recoil"
import TagSearch from '../components/TagsSearch/TagSearch'
import TagDisplay from '../components/TagsDisplay/TagsDisplay'
import searchBarIDs from '../states/searchBarIDs'
import currentSearchBar from '../states/currentSearchBar'

const MultiTagSearchAndDisplay = (props) => {
    const IDs =  useRecoilValue(searchBarIDs)
    const currentID = useRecoilValue(currentSearchBar)

    return (
        <div>
            <TagDisplay searchBarID={currentID}/>
            {IDs.map((ID, i) => (
                <div key={i}>
                    {/* index as key is anti-pattern */}
                    <br></br><br></br>
                    <TagSearch option={props.option} searchBarID={ID}/> 
                </div>
            ))}
        </div>
    )
}

export default MultiTagSearchAndDisplay