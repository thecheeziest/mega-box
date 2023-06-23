import styled from 'styled-components'

// Megabox
export const Container = styled.div`
width: 100vw;
margin: auto;
padding: 50px 0 100px;
box-sizing: border-box;
user-select: none;
h2 {
    font-weight: 900; color: #352461;
    margin: 20px auto 50px;
    font-size: 50px;
    width: 245px;
    cursor: pointer;
    &:hover { transform: scale(110%); transition: 0.3s; }
}
`

// MegaboxForm
export const MegaboxSearchForm = styled.form`
text-align: center; 
    input {
        width: 50%; height: 7vh;  border: 1px solid #bcb0d0; padding:3px 25px; font-size: 15px; outline: none;
        font-size: 18px;
        }
`

export const MegaboxTabBox = styled.div`
&.tab-list {
    background: #FFF;
    display: inline;
    button {
        width: 300px;
        height: 50px;
        background: #352461;
        border: 1px solid #21163d;
        border-bottom: none;
        border-radius: 15px 15px 0 0;
        letter-spacing: -2.5px;
        color: #bcb0b0;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            background: #9f03c0;
        }
        &.on {
            background: #9f03c0;
        }
    }
}
`

// MegaboxList
export const MegaboxListContainer = styled.div`
width: 1270px;
margin: 60px auto;
ul {
display: flex;
flex-wrap: wrap;
padding: 50px 30px 0;
box-sizing: border-box;
background: #352461;
    li {
        border: 1px solid #bcb0d0;
        padding: 7px;
        box-sizing: border-box;
        background: #FFF;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        margin: 0 20px 55px;
        position: relative;
        &:hover {
            transform: scale(110%); transition: 0.3s; }
        }
        .img {
            position: relative;
            height: 350px;
            .txt {
                content: "";
                width: 100%; height: 100%;
                position: absolute;
                background: #000;
                top: 0; left: 0;
                opacity: 0;
                transition: 0.8s;
                padding: 20px; box-sizing: border-box;
                color: #FFF;
                font-size: 17px;
                line-height: 1.89;

                display: -webkit-box;
                -webkit-line-clamp: 10; /* 원하는 줄 수 표시 */
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
            &:hover .txt {
                opacity: 0.7;
            }
            img {
                width: 245px;
            }
        }
        h3 {
            width: 245px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-indent: 5px;
            font-size: 27px; font-weight: 600;
            color: #352461;
            margin: 10px 0;
        }
        p {
            text-indent: 5px;
            display: flex;
            justify-content: space-between;
            width: 240px;
            span {
                position: relative;
                font-size: 15px;
                &:last-child::after {
                    content: "";
                    display: block;
                    width: 1px; height: 14px;
                    background: #bcb0d0;
                    position: absolute;
                    top: 55%; left: -6%;
                    transform: translateY(-50%);
                }
            }
        }
        .btn {
            width: 100%;
            display: flex;
            justify-content: space-around;
            margin: 20px 0 10px;
                button {
                    width: 100px; height: 40px;
                    background: #bcb0d0;
                    border: none;
                    font-size: 18px;
                    font-weight: 700;
                    cursor: pointer;
                    border-radius: 25px;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                    &:hover { background: #352461; color: #FFF; }
                    i { margin-left: -3px; margin-right: 3px; color: #9f03c0; }
                }
            }
        }
.checkbox-wrapper-3 {
    background: #352461;
    padding: 40px 0 0 50px;
    position: relative;
    p { position: absolute; top: 55%; left: 100px; font-size: 17px; color: #D017F8; }
    #cbx-3 {
        visibility: hidden;
        display: none;
        &:checked + .toggle:before { background: #e684fb; }
        &:checked + .toggle span {
            background: #D017F8;
            transform: translateX(20px);
            transition: all 0.2s cubic-bezier(0.8, 0.4, 0.3, 1.25), background 0.15s ease;
            box-shadow: 0 3px 8px rgba(208, 23, 248, 0.2);
        }
        &:checked + .toggle span:before {
            transform: scale(1);
            opacity: 0;
            transition: all 0.4s ease; }
    }
    .toggle {
    position: relative;
    display: block;
    width: 40px;
    height: 20px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
    &::before {
        content: "";
        position: relative;
        top: 3px;
        left: 3px;
        width: 34px;
        height: 14px;
        display: block;
        background: #9A9999;
        border-radius: 8px;
        transition: background 0.2s ease;
    }
    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        display: block;
        background: white;
        border-radius: 10px;
        box-shadow: 0 3px 8px rgba(154, 153, 153, 0.5);
        transition: all 0.2s ease;
        &::before {
            content: "";
            position: absolute;
            display: block;
            margin: -18px;
            width: 56px;
            height: 56px;
            background: rgba(208, 23, 248, 0.5);
            border-radius: 50%;
            transform: scale(0);
            opacity: 1;
            pointer-events: none; }
        }
    }
}
`

// MegaboxModal
export const MegaboxModalBox = styled.div`
    .bg { position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: #000; opacity: 0.8;}
    .popup { position: fixed;
        width: 900px; height: 700px;
        left: 50%; top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px; box-sizing: border-box;
        background: #000;
        border: 1px solid #352461;
        .popbg {
            width: 100%; height: 100%;
            position: absolute;
            top: 0; left: 0;
            background-size: cover;
            z-index: -10;
            opacity: 0.15;
            -webkit-filter: blur(5px); 
            background-position: 50% 50%;
        }
        .close {
            position: absolute;
            top: 15px; right: 20px;
            font-size: 30px;
            color: #bcb0d0;
            cursor: pointer;
        }
        strong {
                font-size: 32px;
                font-weight: 700;
                color: #bcb0d0;
                margin-right: 20px;
        }
                span {
                        font-size: 50px;
                        font-weight: 700;
                        color: #ffd309;
                        margin-right: 20px;
                    }
                em {
                    font-size: 16px;
                    color: #bcb0d0;
                    i { color: #ffd309; font-size: 22px; margin-left: 5px;
                        animation: ani 1.5s infinite; }
                        @keyframes ani {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; } }
                }
                h3 {
                            font-size: 40px;
                            font-weight: 700;
                            margin: 0 0 20px;
                            color: #D017F8;
                        }
        .popup-top {
            display: flex;
            align-items: end;
            margin-top: 10px;
            iframe { margin-right: 30px; }
            h3 { font-weight: 700;color: #D017F8; }
            div {
                width: 300px;
                em { color: #bcb0d0; font-size: 20px; display: block;
                strong { font-size: 30px; margin-right: 0; margin: 0 10px; }}
            }
        }
        .popup-bottom {
            h3 { font-size: 30px; color: #D017F8; margin: 30px 0; }
            p { font-size: 16px; color: #fff; }
        }
    }
`