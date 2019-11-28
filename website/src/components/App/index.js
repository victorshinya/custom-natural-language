import React from 'react';

// Style
import './index.scss';

// App Components
import Navbar from '../Navbar';

// API Services
import NaturalLanguageUnderstanding from '../../api/NaturalLanguageUnderstanding'

// Carbon Design System
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { Form, TextArea, Slider, Button, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody, Loading } from 'carbon-components-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      threshold: 0.0,
      lastThreshold: 0.0,
      response: {
        entities: []
      },
      isLoading: false
    };

    this.handleTextAreaOnChange = this.handleTextAreaOnChange.bind(this);
    this.handleSliderOnChange = this.handleSliderOnChange.bind(this);
    this.getAnalyzedText = this.getAnalyzedText.bind(this);
  }

  getAnalyzedText = (e) => {
    e.preventDefault();
    this.setState({ text: '', lastThreshold: this.state.threshold, isLoading: true });
    if (this.state.text && this.state.text.length > 0) {
      NaturalLanguageUnderstanding.Analyze(this.state.text)
        .then(response => {
          this.setState({ response: response.data, isLoading: false })
        })
        .catch(err => {
            console.error(err);
        })
    }
  }

  handleTextAreaOnChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSliderOnChange = (e) => {
    if (e.value) {
      this.setState({ threshold: Number(e.value) });
    }
  }

  render() {
    const { text, threshold, lastThreshold, response, isLoading } = this.state;
    return (
      <div className="container">
        <Navbar name="Watson Natural Language Understanding" />
        <Content>
          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col">
                <Form onSubmit={this.getAnalyzedText}>
                  <TextArea value={text} onChange={this.handleTextAreaOnChange} labelText="Inser your text below" placeholder="Text to be analyzed" cols={50} rows={4} />
                  <Slider value={threshold} onChange={this.handleSliderOnChange} min={0} max={100} labelText="Threshold" ></Slider>
                  <Button type="submit" style={{ margin: 0 }}>
                    Analyze
                  </Button>
                </Form>
              </div>
              <div className="bx--col">
                <label className="bx--label">Entities</label>
                <StructuredListWrapper>
                  <StructuredListHead>
                    <StructuredListRow head>
                      <StructuredListCell head>Name</StructuredListCell>
                      <StructuredListCell head>Type</StructuredListCell>
                      <StructuredListCell head>Confidence</StructuredListCell>
                    </StructuredListRow>
                  </StructuredListHead>
                  <StructuredListBody>
                    {
                      response.entities.map((obj, i) => (
                        (obj.confidence * 100) >= lastThreshold ? (
                          <StructuredListRow key={i}>
                            <StructuredListCell>{obj.text}</StructuredListCell>
                            <StructuredListCell>{obj.type}</StructuredListCell>
                            <StructuredListCell>{obj.confidence.toFixed(2) * 100}%</StructuredListCell>
                          </StructuredListRow>
                        ) : null
                      ))
                    }
                  </StructuredListBody>
                </StructuredListWrapper>
              </div>
            </div>
          </div>
          <Loading active={isLoading}></Loading>
        </Content>
      </div>
    );
  }
}

export default App;
