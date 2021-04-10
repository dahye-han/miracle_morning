import React from 'react';
import { Checkbox } from 'antd';

const CheckBoxList = () => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
    );
};

export default CheckBoxList;