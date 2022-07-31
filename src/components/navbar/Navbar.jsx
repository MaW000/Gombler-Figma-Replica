import styled  from 'styled-components'
import React from 'react'

export default function Navbar() {
  return (
    <Container>
        <div className='title'>
            <h1>GANVIAN</h1>
        </div>

        <div className='menu'>
            <h1>Home</h1>
            <h1>Services</h1>
            <h1>About Us</h1>
            <h1>Technologies</h1>
        </div>

        <div className='lang'>
            <div>
                <p>En</p>
                <img src={`https://file.rendit.io/n/xrQ0BEvNzJ0kzdTrTcMl.svg`}/>
            </div>
        </div>

        <div className='btn'>
            <h1>Contact Us</h1>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem 6rem;
    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: 'Poppins';
    }

    .title {
        margin-right: 2rem;
        
        h1 {
            font-weight: 400;
            font-size: 36px;
            line-height: 32px;
            color: #000000;
            font-family: SayNext;
        }
    }
`