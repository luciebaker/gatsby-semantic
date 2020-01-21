import React from "react"
import Layout from "../components/layout"

import { Segment, Container, Button, Header } from "semantic-ui-react"

const SecondPage = () => (
  <Layout>
  
  <Segment inverted color='violet'>
  <h3>A segment inverted color: Violet</h3>
  </Segment>

  <div>
  <Header as='h3' inverted attached='top'>
    Attached Header (inverted)
  </Header>
  <Container attached>
    With a container attached 
    <br />
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat.
  </Container>
<br />
  <Button.Group>
    <Button>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
  </Button.Group>
</div>



  <br />






  </Layout>
)

export default SecondPage
