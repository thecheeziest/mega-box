import React, { useEffect, useState } from "react";
import { Container } from "../../styled/megaboxStyle";
import MegaboxForm from '../MegaboxForm/MegaboxForm'
import MegaboxList from '../MegaboxList/MegaboxList'
import MegaboxModal from '../MegaboxModal/MegaboxModal'
import axios from 'axios';

const Megabox = () => {
    const [data, setData] = useState([]);
    const [datalist, setDatalist] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [like, setLike] = useState(false);
    const [modalItem, setModalItem] = useState({});
    const [toggle, setToggle] = useState(false);
    const [tablist, setTablist] = useState([{ontab: true, id: 1, tname: '전체 영화'}, {ontab: false, id: 2, tname: '현재 상영 중'}, {ontab: false, id: 3, tname: '개봉 예정작'}]);

    useEffect(() => {
        const url = 'https://gist.githubusercontent.com/thecheeziest/9ff5d1a64e9348aaec63020bd6efdaed/raw/7557b8fa4757ba1a4ad1b850b51eaaf1ddbf8d0f/megabox.json';
        axios.get(url)
             .then(res => {
                setData(res.data);
                setDatalist(res.data);
                setLoading(true);
                setError(null);
            })
            .catch( error => {
                setData([]);
                setLoading(false);
                setError('E R R O R !!')
             })
    },[]);

    // 검색창
    const onSearch = text => {
        setData(datalist.filter( item =>
            item.movieNm.toLowerCase().includes(text.toLowerCase())));
    }

    // 좋아요 누르기/해제하기
    const onLike = rnum => {
        setLike(!like);
        setData(data.map(item => item.rnum === rnum ?
            {...item, like: like} : item ))
    }

    // 모달 띄우기/닫기
    const onModal = rnum => {
        setShowModal(!showModal);
        setModalItem(datalist.filter(item => item.rnum === rnum));
    }

    // 상영중 탭
    const onTab = id => {
        if (id === 2) { // 상영중
            setData(datalist.filter(item => item.openDt.replace(/-/g, "") < 20230605));
        } else if (id === 3) { // 개봉예정작
            setData(datalist.filter(item => item.openDt.replace(/-/g, "") > 20230605))
        } else {
            setData(datalist); // 전체
        }
        setTablist(tablist.map(item => item.id === id ? {...item, ontab: true} : {...item, ontab: false} ))
    }

    // 토글
    const onToggle = () => {
        if (toggle) { // false일 때
            setData(datalist) // 전체 보기
        } else { // true일 때
            setData(datalist.filter(item => item.openDt.replace(/-/g, "") < 20230605)); // 현재 상영 중인 것만
        }
        setToggle(!toggle);
    }

    return (
        <>
        {
            data && loading ?
            <Container>
            <h2 onClick={() => setData(datalist)}>MEGABOX</h2>
            <MegaboxForm onSearch={onSearch} />
        
            <MegaboxList data={data} onModal={onModal} onLike={onLike} onTab={onTab} tablist={tablist} onToggle={onToggle} />
            {
                showModal &&
                modalItem.map(item => <MegaboxModal onModal={onModal} item={item} />)
            }
            </Container>
            : <h2>로딩 중..</h2>
        }
        <h3> {error ? error : null} </h3>
        </>
    );
};

// export default Megabox;
export default React.memo(Megabox);
