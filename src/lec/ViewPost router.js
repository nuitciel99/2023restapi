import {useParams} from 'react-router-dom'

function ViewPost({listData}){

    let {id} = useParams()
    // let item = listData.find(function(item){
    //     return item.id == id
    // })
    // 이 전에는 데이터가 다른 데이터를 불러옴
    let item = listData.find((item)=> item.id == id)

    if(listData.length == 0){
        return "KNOWN DATA"
    }

    return(
        <>
            {item.title} / {item.content}
            <div><a href="/">HOME</a></div>
        </>
    )
}

export default ViewPost;