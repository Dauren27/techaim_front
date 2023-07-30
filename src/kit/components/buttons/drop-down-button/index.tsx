import * as React from 'react'
import Dropdown from 'react-dropdown';
import { ABOUT_US } from '../../../../misc/header'


// const styles = require('./index.scss')

interface Props {
    onChange: (option: any) => void
    value: any
    placeholder: string
}

export default class DropdownButton extends React.Component<Props, {}> {
    private handleChange = (selectedOption: any) => {
        if (selectedOption !== this.props.value) {
            this.props.onChange(selectedOption)
        }
    }
    render() {
        return (
            <Dropdown
                options={ABOUT_US}
                onChange={this.handleChange}
                placeholder={this.props.placeholder}
            />
        )
    }
}
