import React, { Component } from 'react';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';

import './style.css';

class SensorConfig extends Component {

    constructor() {
		super();
		this.state = {
			value: 50
		}
	}

    componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
        console.log('ChangeSettings', nextProps.value, this.state.value)
        if (nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

	onChange = (e) => {
		this.setState({ value: parseInt(e.target.value, 10) });
        this.props.valueChange(e.target.value, this.props.id);
	};

    render(){
        return (
            <input type="range" min="0" max="100" className="scroller" value={this.state.value} onChange={this.onChange} />
        )
    }
}

SensorConfig.propTypes = {
    id: PropTypes.string,
    value: PropTypes.number,
    valueChange: PropTypes.func
};

SensorConfig.defaultProps = {
    id: '',
    value: 50
};


export default SensorConfig;