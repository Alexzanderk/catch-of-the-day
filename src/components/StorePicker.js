import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    input = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.input.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
      return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter A Store</h2>
            <input 
                ref={this.input}
                type="text" 
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()} 
            />
          <button type="submit">Visit Store →</button>
        </form>
      );
    }
  }

export default StorePicker;