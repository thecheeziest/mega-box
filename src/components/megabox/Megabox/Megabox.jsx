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

    return (
        <>
        {
            data && loading ?
            <Container>
            <h2 onClick={() => setData(datalist)}>MEGABOX</h2>
            <MegaboxForm onSearch={onSearch} />
            <MegaboxList data={data} onModal={onModal} onLike={onLike} />
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
