import * as React from 'react';

import '../assets/styles/Footer.css';

export const Footer = (): React.ReactElement<{}> => {
    return (
        <div className="footer-container">
            <span className="footer-text">
                Created by <a href="https://www.drewhiggins.com">Drew Higgins</a>.
                <br />
                Get the source code on GitHub!
            </span>
        </div>
    );
}