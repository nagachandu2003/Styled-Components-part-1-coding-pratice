import {Component} from 'react'
import {
  Container,
  Heading,
  Label,
  InputElement,
  SelectInputElement,
  Form,
  Button,
  Container2,
  Heading2,
} from './styledComponents'
import OptionItem from '../OptionItem'

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
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    submitStatus: false,
  }

  onChangeImgUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    this.setState({
      submitStatus: true,
    })
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, submitStatus} = this.state

    return (
      <Container>
        {submitStatus && (
          <Container2 data-testid="meme" imageUrl={imageUrl}>
            <Heading2 fontSize={fontSize}>{topText}</Heading2>
            <Heading2 fontSize={fontSize}>{bottomText}</Heading2>
          </Container2>
        )}
        <Container2>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.onGenerateMeme}>
            <Label htmlFor="imgUrl">Image URL</Label>
            <br />
            <InputElement
              value={imageUrl}
              onChange={this.onChangeImgUrl}
              id="imgUrl"
              type="text"
            />
            <br />
            <Label htmlFor="topText">Top Text</Label>
            <br />
            <InputElement
              value={topText}
              onChange={this.onChangeTopText}
              id="topText"
              type="text"
            />
            <br />
            <Label htmlFor="bottomText">Bottom Text</Label>
            <InputElement
              value={bottomText}
              onChange={this.onChangeBottomText}
              id="bottomText"
              type="text"
            />
            <br />
            <Label htmlFor="fontSize">Font Size</Label>
            <SelectInputElement
              value={fontSize}
              id="fontSize"
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(ele => (
                <OptionItem key={ele.optionId} OptionDetails={ele} />
              ))}
            </SelectInputElement>
            <Button type="submit">Generate</Button>
          </Form>
        </Container2>
      </Container>
    )
  }
}

export default MemeGenerator
