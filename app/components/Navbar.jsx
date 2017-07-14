import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                                <Link to={'/'}>
                                   <li className="active">Home</li>
                                </Link>
                                
                                <Link to={'/students'}>
                                    <li>Sudents</li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}