import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0;
    background: #16233A;

    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F8D5E1;
    
        img { 
            padding: 5px;
        }

        span {
            background: red;
            color: #F8D5E1;
            font-weight: bold;
            font-size: 13px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content:center;
            border-radius: 100px;
            margin: 0;
        }
    }


    .cart {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section {
        width: 90%;
        height: 90%;
        background: #F8D5E1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 50px auto;
        border-radius: 15px;
        box-shadow: 10px 5px 5px #da83b0;
        color: #16233A;
        
        .wrap-itens {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
        }

        .product-container{
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            border: 1px solid black;
            box-shadow: 10px 5px 5px #da83b0;
            width: 200px;
            background-color: #16233A;
            color: #f8e6ed;

            .add-cart {
                border-radius: 10px;
                background-color: #d7197a;
                border: solid #d7197a;
                padding: 5px;
                margin: 5px 0;
                color: #f8e6ed;
                font-weight: 600;
            }

            .add-cart:hover {
                cursor: pointer;
                background-color: #F6BED3;
                color: #16233A;
                border: solid #F6BED3;
            }
        }
    }

    .footer {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        color: #16233A;
        justify-content: space-around;

        .about-me {
            width: 20%;
            color: #f8e6ed;

        }
        .footer-text {
            font-size: 13px;
        }

        .social-icons {
            fill: #f8e6ed;
            padding: 10px;
        }

    }

    .credits {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            color: #f8e6ed;
        }
`
