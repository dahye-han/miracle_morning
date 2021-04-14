import React from 'react';
import { Tabs, Radio } from 'antd';
import DayRecord from './DayRecord';
import moment from 'moment';

const { TabPane } = Tabs;

moment.locale('ko');

const DayList = () => {
    const tabList = [{'data':'20210410'}, {'data':'20210411'}, {'data':'20210412'}, {'data':'20210413'}, {'data':'20210414'}, {'data':'20210415'}, {'data':'20210416'}];

    return (
        <>
            <div style={{width:'29%', display: 'inline-block'}}>
                date
            </div>
            <div style={{width:'69%', display: 'inline-block'}}>
                <Tabs defaultActiveKey="3" tabPosition="top">
                {tabList.map((tab,i) => (
                    <TabPane tab={moment(tab.data).format('LL')} key={i}>
                        <DayRecord dateKey={i} selectDate={tab.data}/>
                    </TabPane>
                ))}
                </Tabs>
            </div>
        </>
    );
};

export default DayList;