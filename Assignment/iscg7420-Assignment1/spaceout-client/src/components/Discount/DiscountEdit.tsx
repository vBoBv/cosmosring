import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchDiscount, editDiscount } from '../../actions/discounts';
import { StoreState } from '../../reducers';
import { IDiscount } from '../../actions';
import DiscountForm from './DiscountForm';
import _ from 'lodash';

interface IDiscountEditProps {
	discounts: IDiscount[];
	fetchDiscount: (id: number) => void;
	editDiscount: (id: number, formValues: any) => void;
}

interface IRouteComponentMatchParamProps {
	id: string;
}

class DiscountEdit extends Component<RouteComponentProps<IRouteComponentMatchParamProps> & IDiscountEditProps> {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchDiscount(parseInt(id));
	}

	onSubmit = (formValues: any) => {
		const { id } = this.props.match.params;

		this.props.editDiscount(parseInt(id), formValues);
	};

	render() {
		return (
			<div style={{ backgroundColor: 'grey', paddingTop: '5rem' }}>
				<h1>Edit Discount</h1>
				<DiscountForm
					initialValues={_.pick(
						this.props.discounts.filter((discount) => discount.id === parseInt(this.props.match.params.id))[0],
						'discount_code'
					)}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ discounts }: StoreState): { discounts: IDiscount[] } => {
	return {
		discounts: Object.values(discounts)
	};
};

export default connect(mapStateToProps, { fetchDiscount, editDiscount })(DiscountEdit);
