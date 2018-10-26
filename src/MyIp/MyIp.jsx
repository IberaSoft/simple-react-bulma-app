import React from 'react';
import WidthIP from './../WidthIP/WidthIP';

const MyIp = () => (
    <WidthIP>
        {(ip) => (
            <div className="field">
                <div className="control">
                    <input className="input Warning" type="text" placeholder="Your Ip Is..." value={ip} />
                </div>
            </div>
        )}
    </WidthIP>
)

export default MyIp;