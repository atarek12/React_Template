import styled from 'styled-components'

export const Workk = styled.div`
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    max-height: 450px;

`
export const Info = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Name = styled.h1`
    color: #85203b;
    @media screen and (max-width: 600px) {
        font-size: 20px;
    }
`

export const Title = styled.h4`
    color: #85203b;
    @media screen and (max-width: 600px) {
        font-size: 15px;
    }
`

export const Description = styled.p`
    @media screen and (max-width: 600px) {
        font-size: 10px;
    }
`

export const Btn = styled.button` 
    width: 8rem;
    height: 2rem;
    color:  #85203b;
    border-color: #85203b;
    font-weight: bold;
    text-transform: uppercase;
    background: #a1eafb;
    cursor: pointer;

    &:active{
        transform: scale(0.98);
    }

    &:hover{
        background:  #85203b;
        color: #FFF;
    }


`