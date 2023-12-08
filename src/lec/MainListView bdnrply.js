import { getArticles } from "../api";
import { useEffect, useState } from 'react';

function MainListView() {
    const [listData, setListData] = useState([])

    const callApi = async () => {
        try {
            const articles = await getArticles();
            console.log(articles)
            setListData(articles.data)
        } catch (error) {
            console.error("에러 : ", error)
        }
    }
    useEffect(() => {
        callApi()
    }, [])
    return (
        <>
            {
                listData?.map(function (item, i) {
                    return (
                        <li key={i}><a href={`/articles/${item.id}`}>{item.title}</a></li>
                    )
                })
            }

        </>
    )
}

export default MainListView;