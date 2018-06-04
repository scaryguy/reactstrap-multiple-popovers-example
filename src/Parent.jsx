import React, { Component } from 'react';
import PopoverButton from './PopoverButton'
import { Card, CardImg, CardTitle, Row, Col } from 'reactstrap';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.childrenItems = [
            { id: 1, title: "One", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ex nisi. Phasellus maximus facilisis dui, vel finibus augue blandit nec. Fusce vehicula ultrices odio. Aliquam cursus porttitor feugiat. Ut eu consectetur purus, et volutpat ligula. Ut vel diam diam. Nunc pretium vitae mauris vel euismod. " },
            { id: 2, title: "Two", description: "Praesent ac consequat nisl, consequat tristique justo. Morbi ac erat ut eros luctus interdum vel eu orci. Nulla lacinia interdum ex et auctor. Ut sit amet venenatis orci. Sed lacinia lorem eu urna aliquam varius." },
            { id: 3, title: "Three", description: "Praesent ac consequat nisl, consequat tristique justo. Morbi ac erat ut eros luctus interdum vel eu orci. Nulla lacinia interdum ex et auctor. Ut sit amet venenatis orci. Sed lacinia lorem eu urna aliquam varius." },
            { id: 4, title: "Four", description: "Praesent ac consequat nisl, consequat tristique justo. Morbi ac erat ut eros luctus interdum vel eu orci. Nulla lacinia interdum ex et auctor. Ut sit amet venenatis orci. Sed lacinia lorem eu urna aliquam varius." }]
    }



    render() {
        return (
            <div>
                {/* <h1>Parent</h1>
                {this.childrenItems.map((child) => {
                    return <Child item={child} key={child.id} />
                })} */}

                <Row>
                    {this.childrenItems.map((child) => {
                        return (
                            <Col sm="6" key={child.id} style={{ marginBottom: "20px" }}>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <Card body>
                                    <CardTitle className="popOverHeader text-center">{child.title}</CardTitle>
                                    {/* <Button>Tap for <strong>{child.title}</strong>'s popover!</Button> */}
                                    <PopoverButton item={child} key={child.id} />
                                </Card>
                            </Col>)
                    })}
                </Row>


            </div>
        )
    }


}

export default Parent;