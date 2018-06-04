import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class PopoverButton extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }



    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }

    render() {
        return (
            <div>
                <Button size="lg" id={'Popover' + this.props.item.id} onClick={this.toggle} block style={{ whiteSpace: "normal" }}>
                    Click for <strong>{this.props.item.title}</strong>'s popover!
                </Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'Popover' + this.props.item.id} toggle={this.toggle}>
                    <PopoverHeader className="text-center">{this.props.item.title}</PopoverHeader>
                    <PopoverBody>{this.props.item.description}</PopoverBody>
                </Popover>
            </div>
        )
    }

}

export default PopoverButton;