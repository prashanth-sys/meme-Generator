import styled from 'styled-components'

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #35469c;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  color: #7e858e;
  margin-top: 10px;
`
export const ImageInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`
export const SelectLabel = styled.label`
  font-family: 'Roboto';
  color: #7e858e;
  margin-top: 10px;
`
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`
export const GenreatorButton = styled.button`
  background-color: #35469c;
  height: 32px;
  width: 99px;
  border-width: 0px;
  color: white;
  font-family: 'Roboto';
  border-radius: 5px;
`

export const GeneratedMeme = styled.div`
  margin-top: 20px;
  background-image: ${props => (props.image ? `url(${props.image})` : 'none')};
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333;
    text-align: center;
    margin-top: 10px;
  }
`
