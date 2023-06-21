import React from 'react';
import { MegaboxListContainer } from '../../styled/megaboxStyle';
import MegaboxItem from './MegaboxItem';

const MegaboxList = ( {data, onModal, onLike} ) => {
    return (
        <MegaboxListContainer>
            {
                data.map(item => <MegaboxItem item={item} onModal={onModal} onLike={onLike} />)
            }
        </MegaboxListContainer>
    );
};

export default MegaboxList;