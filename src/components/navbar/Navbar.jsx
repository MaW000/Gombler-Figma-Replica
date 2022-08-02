import styled  from 'styled-components'
import React from 'react'

export default function Navbar() {
  return (
    <Container>
        <div className='nav'>
            <div className='title'>
                <h1>GANVIAN</h1>
            </div>
            <div className='menu'>
                <h1 className='selected'>Home</h1>
                <h1>Services</h1>
                <h1>About Us</h1>
                <h1>Technologies</h1>
            </div>
        </div>
       
        <div className='contact'>
            <div className='lang'>
                <p>En</p>
                <img src={`https://file.rendit.io/n/xrQ0BEvNzJ0kzdTrTcMl.svg`}/>
            </div>
            <div className='btn'>
                <h1>Contact Us</h1>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    background: linear-gradient(90deg, #FFF 75%, #FFE5FE 25%);
    
    .nav {
        display: flex;
        align-items: center;
        gap: 12rem;
    }
    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        gap: 6rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .selected {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            
            color: #B311FF;
        }

        h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;

            color: #99B8AF;
        }
    }

    .contact {
        
        display: flex;
        justify-content: center;
        gap: 1.75rem;
        .lang {
            display: flex;
            margin-top: .6rem;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            

            color: #B311FF;
            img {
                width: 14px;
                height: 14px;
                margin-top: .3rem;
                margin-left: .3rem;
            }
        }
    }

    .btn {
        background: #B311FF;
        border-radius: 15px;
        width: 169px;
        height: 48px;
        align-items: center;
        border: none;
        cursor: pointer;
        h1 {
        margin-top: .6rem;
        
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #FFFFFF;
        text-align: center;
        }
    }

    .title {
        
        flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
        
        h1 {
            font-weight: 400;
            font-size: 36px;
            line-height: 32px;
            color: #000000;
            font-family: SayNext;
            text-align: center;

            margin-bottom: .5rem;
        }
    }

    @media screen and (max-width: 1360px) {
        padding: 2rem 3rem;
        .nav {
            gap: 3rem;
        }
        .contact {
            gap: 2.5rem;
        }
        .menu {
            gap: 1rem;
        }
    }
    @media screen and (max-width: 769px) {
        padding: 1rem 1rem;
        .nav {
            gap: 2rem;
        }
        .menu {
            display: none;
        }
    }
    @media screen and (max-width: 450px) {
        text-align: center;
        background: linear-gradient(90deg, #FFF 65%, #FFE5FE 35%);
        
        .btn {
            width: 7rem;
            height: 2.5rem;
            h1 {
                margin-top: .4rem;
                font-size: 1rem;
            }
        }
    }
`