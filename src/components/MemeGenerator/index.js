// Style your components here

// ./src/components/MemeGenerator/index.js
import {Component} from 'react'
import {
  MemeContainer,
  Heading,
  InputLabel,
  ImageInput,
  SelectLabel,
  Select,
  GenreatorButton,
  GeneratedMeme,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    fontSize: 9,
    generatedMeme: null,
    image: '',
  }

  onTopText = event => {
    this.setState({topText: event.target.value})
  }

  onBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenreateMeam = () => {
    const {topText, bottomText, image} = this.state
    const generatedMeme = (
      <GeneratedMeme image={image}>
        <div>
          {topText && <p>{topText}</p>}
          {bottomText && <p>{bottomText}</p>}
        </div>
      </GeneratedMeme>
    )
    this.setState({
      generatedMeme,
      image: 'https://assets.ccbp.in/frontend/react-js/nature-img.png',
    })
  }

  onImage = event => {
    this.setState({
      image: event.target.value,
    })
  }

  render() {
    const {topText, bottomText, fontSize, generatedMeme, image} = this.state
    return (
      <MemeContainer>
        <Heading>Meme Generator</Heading>
        <form>
          <InputLabel>
            image URL
            <ImageInput
              type="text"
              value={image}
              onChange={this.onImage}
              placeholder="Enter the imageURL"
            />
          </InputLabel>

          <InputLabel>
            Top Text
            <ImageInput
              type="text"
              value={topText}
              onChange={this.onTopText}
              placeholder="Enter the Top Text"
            />
          </InputLabel>

          <InputLabel>
            Bottom Text
            <ImageInput
              type="text"
              value={bottomText}
              onChange={this.onBottomText}
              placeholder="Enter the Bottom Text"
            />
          </InputLabel>

          <SelectLabel>
            Font Size
            <Select value={fontSize} onChange={this.onFontSize}>
              {fontSizesOptionsList.map(item => (
                <option key={item.optionId} value={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </Select>
          </SelectLabel>

          <GenreatorButton onClick={this.onGenreateMeam}>
            Generate
          </GenreatorButton>
        </form>
        {generatedMeme && <div data-testid="meme">{generatedMeme}</div>}
      </MemeContainer>
    )
  }
}

export default MemeGenerator
