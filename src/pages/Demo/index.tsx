import React, { Component } from 'react';
import { withRouter, injectIntl } from 'umi';
import { Button, Table, message } from 'antd';
import { api } from '../../helpers/auth';
import axios from 'axios';

type IProps = {
    props: any
}

type IStart = {
    data: any,
    columns: any,
}


class Demo extends Component<IProps, IStart> {
    constructor(props:any) {
        super(props);
        this.state = {
            columns: [{ title: 'icon', dataIndex: 'icon', key: 'icon', }, { title: 'id', dataIndex: 'id', key: 'id', }, { title: 'name', dataIndex: 'name', key: 'name', }],
            data: null
        };
    }

    HandleQuery = () => {
        axios.get(api.getData)
            .then(res => {
                if (res.status === 200) {
                    this.setState({
                        data: res.data.data,
                    });
                } else {
                    this.setState({
                        data: null,
                    });
                };
            })
            .catch(err => {
                this.setState({
                    data: null,
                });
                message.error('数据请求失败');
            });
    }

    render() {
        let { data, columns } = this.state;
        return (
            <div className="index">
                <ul className="list">
                    <li><h2>Demo</h2></li>
                    <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
                    <li><h2><Button onClick={this.HandleQuery}>{this.props.intl.formatMessage({ id: 'index.start' })}</Button></h2></li>
                </ul>
                <hr />
                {
                    data &&
                    <Table dataSource={data} columns={columns} rowKey={(v, i) => {
                        return v.id
                    }} />
                }
                <br />
            </div>
        )
    }
}

export default injectIntl(withRouter(Demo));