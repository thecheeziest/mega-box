import styled from 'styled-components'

// Megabox
export const Container = styled.div`
width: 100vw;
margin: auto;
padding: 50px 0 100px;
box-sizing: border-box;
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
/* padding-bottom:20px; */
/* margin-bottom: 20px; */
text-align: center; 
    input {
        width: 50%; height: 7vh;  border: 1px solid #bcb0d0; padding:3px 25px; font-size: 15px; outline: none;
        font-size: 18px;
        }
`

// MegaboxList
export const MegaboxListContainer = styled.ul`
width: 1270px;
margin: 50px auto;
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
    &:hover { transform: scale(110%); transition: 0.3s; }
    img { width: 245px; }
    h3 {
        width: 245px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-indent: 5px;
        font-size: 27px; font-weight: 500;
        color: #352461;
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
                top: 55%; left: -5%;
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
`

// MegaboxModal
export const MegaboxModalBox = styled.div`
    .bg { position: fixed; width: 100%; height: 100%; left: 0; top: 0; background: #000; opacity: 0.7;}
    .popup { position: fixed; width: 700px;
        left: 50%; top: 50%; background-color: #fff;
        transform: translate(-50%, -50%);
        padding: 30px; box-sizing: border-box;
        .close {
            position: absolute;
            top: 15px; right: 20px;
            font-size: 30px;
            cursor: pointer;
        }
        strong {
            font-size: 32px;
            font-weight: 700;
            color: #352461;
            vertical-align: middle;
            span {
                font-size: 50px;
                font-weight: 700;
                color: #ffd309;
                margin-left: 35px;
            }
        }
        em {
            margin-left: 20px;
            font-size: 16px;
            color: #bcb0d0;
            i { color: #ffd309; font-size: 22px; margin-left: 5px;
                animation: ani 1.5s infinite; }
                @keyframes ani {
                0% { opacity: 1; }
                50% { opacity: 0; }
                100% { opacity: 1; } }
        }
        .info {
            width: 100%;
            display: flex;
            align-items: end;
            margin-top: 10px;
            img { width: 330px; margin-right: 30px;
                &:hover { transform: scale(105%); transition: 0.3s; } }
            div {
                margin-bottom: 30px;
                h3 {
                    font-size: 50px;
                    font-weight: 700;
                    margin: 30px 0;
                    color: #352461;
                }
                p {
                    font-size: 22px;
                    display: flex;
                    align-items: center;
                    strong {
                        margin: 0 10px;
                        font-size: 27px;
                    }
                }
            }
        }
    }
`