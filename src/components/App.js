import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish.js';
import sampleFishes from '../sample-fishes';
import base from '../base.js';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount() {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    addFish = fish => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    }

    updateFish = (key, updatedFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updatedFish;
        this.setState({ fishes });
    }

    deleteFish = key => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    }

    addToOrder = key => {
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    removeOrder = key => {
        const order = { ...this.state.order };
        delete order[key];
        this.setState({ order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fishes Best Restaraunt' />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={ this.state.fishes[key] }
                                addToOrder={ this.addToOrder }
                            />
                        ))}
                    </ul>
                </div>
                <Order
                    fishes={ this.state.fishes }
                    removeOrder={ this.removeOrder }
                    order={ this.state.order }
                />
                <Inventory 
                    addFish={ this.addFish }
                    updateFish={ this.updateFish }
                    deleteFish={ this.deleteFish } 
                    loadSampleFishes={ this.loadSampleFishes }
                    fishes={ this.state.fishes }
                    storeId={this.props.match.params.storeId}
                />
            </div>
        )
    }
}

export default App;