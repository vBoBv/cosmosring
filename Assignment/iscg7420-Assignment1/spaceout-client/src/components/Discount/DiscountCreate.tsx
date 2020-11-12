import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDiscount } from '../../actions';
import DiscountForm from './DiscountForm';

interface IDiscountCreateProps {
	createDiscount: (formValues: any) => void;
}

class DiscountCreate extends Component<IDiscountCreateProps> {
	onSubmit = (formValues: any) => {
		this.props.createDiscount(formValues);
	};

	render() {
		return (
			<div style={{ backgroundColor: 'black', paddingTop: '5rem' }}>
				<h1>Create Discount</h1>
				<DiscountForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createDiscount })(DiscountCreate);
