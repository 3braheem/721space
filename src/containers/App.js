import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import { addresses } from './addresses';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/ErrorBoundary.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            addresses: [],
            searchfield: '' 
        }
    }

    componentDidMount() {
        this.setState({ addresses: addresses });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { addresses, searchfield } = this.state;
        const filteredIds = addresses.filter(input => {
            return input.address.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f-1'><code>721space;</code></h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList addresses={filteredIds}/>
                    </ErrorBoundary>
                </Scroll>
                {/* TODO: Add Input and button to upload your own addresses */}
            </div>
        );
    }
}

export default App;