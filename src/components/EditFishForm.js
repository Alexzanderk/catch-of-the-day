import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        updateFish: PropTypes.func,
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            status: PropTypes.string,
            desc: PropTypes.string,
            price: PropTypes.number
        }),
        index: PropTypes.string
    }

    handleChange = event => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.name === 'price' ? Number(event.currentTarget.value) : event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish)

    }

    handleDelete = () => {
        this.props.deleteFish(this.props.index);
    }


    render() {
        const { name, price, status, desc, image } = this.props.fish;

        return ( 
           <div className="fish-edit">
                <input 
                    type='text' 
                    name='name' 
                    onChange={this.handleChange} 
                    value={ name } 
                />
                <input 
                    type='text' 
                    name='price' 
                    onChange={this.handleChange} 
                    value={ price } 
                />
                <select 
                    type='text' 
                    name='status' 
                    onChange={this.handleChange} 
                    value={ status }
                >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea 
                    name='desc' 
                    onChange={this.handleChange} 
                    value={desc} 
                ></textarea>
                <input 
                    type='text' 
                    name='image' 
                    onChange={this.handleChange} 
                    value={ image } 
                />
                <button onClick={this.handleDelete}>Remove Fish</button>
           </div>
        )
    }
}

export default EditFishForm;