import React from 'react';
import { Tabs, Radio } from 'antd';
import DayRecord from './DayRecord';
import moment from 'moment';

const { TabPane } = Tabs;

moment.locale('ko');

const DayList = () => {
    const tabList = [];
    // const today = moment().subtract(3).format('YYYYMMDD');
    // tabList.push(today);
    for(let i = -3; i<4; i++) {
        console.log(i);
        console.log(moment().add(i, 'days').format('YYYYMMDD'))
        tabList.push(moment().add(i, 'days').format('YYYYMMDD'));
    }

    return (
        <>
            <div style={{width:'29%', display: 'inline-block'}}>
                date
            </div>
            <div style={{width:'69%', display: 'inline-block'}}>
                <Tabs defaultActiveKey="3" tabPosition="top">
                {tabList.map((tab,i) => (
                    <TabPane tab={moment(tab).format('LL')} key={i}>
                        <DayRecord dateKey={i} selectDate={tab}/>
                    </TabPane>
                ))}
                </Tabs>
            </div>
        </>
    );
};

export default DayList;