import styled  from 'styled-components'
import React from 'react'

function company() {
  return (
    <Container>
        <div>
            <h1>Our Company</h1>
        </div>
        <div className='body'>
            <div className='image'>
                  
            </div>
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
        </div>
    </Container>
    
  )
}

const Container = styled.div`
    
`

export default company