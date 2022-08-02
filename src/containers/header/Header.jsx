import styled  from 'styled-components'
import React from 'react'

function Header() {
  return (
    <Container className='section__padding'>
        <div className='text'>
            <h1>A company focused on innovation in <span className='gradient__text'>software creation.</span></h1>
            <h2>We always seek the best way to help our customers with good agility.</h2>
            <div className='btns'>
                <div className='color'>
                    <h1>Free Consultation</h1>
                </div>
                
                <div className='clear'>
                    <h1>Read More</h1>
                </div>
            </div>
        </div>
        <div className='image'>
            <img src='https://file.rendit.io/n/mSRdiXIwNhpCvhFkZsO0.png' />
            <img src='https://file.rendit.io/n/Ccj6aMm1y9laMuefLhs6.png' />
        </div>
        <div className='purple'>

        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    
    flex-direction: row;
    
    justify-content: space-between;
    .purple {
        position: absolute;
        float: right;
        top: 0;
        right: 0;
        overflow: hidden;
        border-bottom-left-radius: 250px;
        border: none;
        z-index: -1;
        height: 60rem;
        width: 25%;
        background: #FFE5FE;
    }
    .image {
        img {
            height: 24.45rem;
        }
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h1 {
            max-width: 31rem;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 42px;
            line-height: 63px;
        }

        h2 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 36px;
            max-width: 31rem;
            color: #99B8AF;
        }

        .btns {
            display: flex;
            gap: 1.875rem;
            .color {
                background: #B311FF;
                border-radius: 15px;
                width: 14.375rem;
                height: 4.125rem;

                h1 {
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 30px;
                    text-align: center;

                    margin-top: 1rem;
                    color: #FFFFFF;
                }
            }
            
            .clear {
                border: 1.5px solid #B311FF;
                border-radius: 15px;
                width: 10.375rem;
                height: 4.125rem;
                h1 {
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 30px;
                    text-align: center;
                    color: #B311FF;
                    margin-top: .9rem;
                }
            }
        }
    }
    @media screen and (max-width: 1360px) {
        padding: 8rem 3rem;
    }
    @media screen and (max-width: 894px) {
        flex-direction: column;
        padding: 1rem 3rem;
        gap: 1rem;
    }
    @media screen and (max-width: 450px) {
        padding: 1rem 3rem;
        .purple {
            max-height: 40rem;
            width: 35%;
        }
        .text {
            h1 {
                font-size: 31px;
                line-height: 50px;
            }
            h2 {
                font-size: 16px;
            }
            .btns {
                gap: .5rem;
                .color {
                    width: 8rem;
                    height: 3rem;

                    h1 {
                        font-size: 13px;
                        margin-top: 8px;
                    }
                }
                
                .clear {
                    width: 6rem;
                    height: 3rem;
                    h1 {
                        font-size: 14px;
                        margin-top: 6px;
                    }
                }
            }
        }
        .image {
            margin-left: rem;
            img {
                height: 19rem;
            }
        }
        
    }
`

export default Header