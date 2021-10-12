import React from 'react';
import ReactDOM from 'react-dom';
import Test from './component';

function App() {
    return (
        <div>
            <h1>Hello IdanLo</h1>
            <Test />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
