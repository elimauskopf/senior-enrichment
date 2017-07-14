import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="parent">
                <div className="masthead clearfix">
                    <div className="inner">
                        <h3 className="masthead-brand">Cover</h3>
                        <nav>
                            <ul className="nav masthead-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Sudents</a></li>
                                <li><a href="#">Campus</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}