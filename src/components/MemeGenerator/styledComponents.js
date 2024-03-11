import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  margin: 10px;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const Container2 = styled.div`
  font-family: 'Roboto';
  background-image: url(${props => props.imageUrl});
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
`

export const Heading = styled.h1`
  color: #35469c;
  margin: 10px;
  text-align: center;
`

export const Heading2 = styled.p`
  color: white;
  text-align: center;
  font-size: ${props => parseInt(props.fontSize)}px;
`

export const Label = styled.label`
  color: #5a7184;
  font-family: 'Roboto';
  margin: 10px;
`

export const InputElement = styled.input`
  padding: 10px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  color: #7e858e;
  margin: 10px;
  width: 90%;
`

export const SelectInputElement = styled.select`
  padding: 10px;
  border: 1px solid #5a7184;
  border-radius: 5px;
  color: #7e858e;
  margin: 10px;
  width: 90%;
`

export const Form = styled.form`
  padding: 10px;
`
export const Button = styled.button`
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #0b69ff;
  color: white;
  text-align: center;
  border-width: 0;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
`
