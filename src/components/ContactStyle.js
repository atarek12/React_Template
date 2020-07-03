import styled from 'styled-components'

export const ContactSection = styled.div`
text-align: center;
padding-top: 10%
`

export const Title = styled.h1`
color: #002651;
font-family: auto;
`

export const Form = styled.form`

`

export const FormInput = styled.input`
height: 25px;
width: 40%;
padding: 5px;
margin: 10px;
color: #002651; 
font-size:20px
`

export const FormSubject = styled(FormInput)`
height: 25px;
width: 84%;
padding: 5px;
margin: 10px;
color: #002651;
display: block;
position: relative;
left: 6%;
`

export const Textarea = styled.textarea`
height: 200px;
width: 84%;
padding: 5px;
margin: 10px;
color: #002651;
display: block;
position: relative;
left: 6%;
font-size:20px
`

export const FormBtn = styled.input`
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