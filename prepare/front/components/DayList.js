import React from 'react';
import { Tabs, Radio } from 'antd';
import DayRecord from './DayRecord';

const { TabPane } = Tabs;

const DayList = () => {

    return (
        <>
            <div style={{width:'29%', display: 'inline-block'}}>
                date
            </div>
            <div style={{width:'69%', display: 'inline-block'}}>
                <Tabs defaultActiveKey="3" tabPosition="top">
                {[...Array.from({ length: 7 }, (v, i) => i)].map(i => (
                    <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
                        <DayRecord dateKey={i}/>
                    </TabPane>
                ))}
                </Tabs>
            </div>
        </>
    );
};

export default DayList;