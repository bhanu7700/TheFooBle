import React, { Component } from 'react'

import './body.css'

class body extends Component {
    render() {
        return (
            <div className = 'body'>
                    <h1>TheFooBle.in</h1>
                            <input
                        type="text"
                        ref="search"
                        placeholder="Search Bar"
                    />

            </div>

        )
    }
}

export default body
