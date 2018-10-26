import React from 'react';
import WidthIP from './../WidthIP/WidthIP';

const MyIp = () => (
    <WidthIP>
        {(ip) => (
            <div class="field">
                <div class="control">
                    <input class="input Warning" type="text" placeholder="Your Ip Is..." value={ip} />
                </div>
            </div>
        )}
    </WidthIP>
)

export default MyIp;