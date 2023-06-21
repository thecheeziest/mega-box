import React from 'react';
import { MegaboxModalBox } from '../../styled/megaboxStyle';

const MegaboxModal = ( {onModal, item} ) => {
    const {rank, movieNm, openDt, audiAcc, showCnt, rankInten, imageURL } = item;

    return (
        <MegaboxModalBox>
            <div className="bg"></div>
            <div className="popup">
                <strong>박스오피스 순위 <span>{rank}위</span></strong>
                <em>전일 대비
                    <i className={rankInten === '0' ? 'xi-ellipsis-h' : rankInten > '0' ? 'xi-caret-up-min' : 'xi-caret-down-min'}>{rankInten === '0' || rankInten}</i>
                </em>
                <div className='info'>
                    <img src={imageURL} alt={movieNm} />
                    <div>
                        <h3>{movieNm}</h3>
                        <p>개봉일 : <strong>{openDt}</strong></p>
                        <p>누적 관객 수 : <strong>{audiAcc}</strong> 명</p>
                        <p>해당일 상영 횟수 : <strong>{showCnt}</strong> 명</p>
                    </div>
                </div>
                <i className='close xi-close-circle' onClick={onModal}></i>
            </div>
        </MegaboxModalBox>
    );
};

export default MegaboxModal;