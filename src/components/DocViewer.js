import React, { Component } from 'react';
import { alertText } from '../dom.js';
import { getDocs } from '../services/API.js';
import ReactMarkdown from 'react-markdown';

class DocViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadding: "auto",
            description: "",
            point: -1,
            title:"",
            content:"",
            list_check: []
        }
    }
    update = (chapterID, id) => {
        this.setState({ loadding: "auto" });
        getDocs(chapterID, id).then(object => {
            console.log(object);
            if (object.success && object.data) {
        this.setState({title:object.data.title});
        this.setState({content:object.data.content});
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id != nextProps.id)
            this.update(nextProps.chapterID, nextProps.id);
    }
    componentDidMount() {
        this.update(this.props.chapterID, this.props.id);
    }
    render() {
        return (
            <div id="docviewer">
               <h2>{this.state.title}</h2>
               <div className="markdown">
               <ReactMarkdown source={this.state.content}/>
               </div>           
            </div>
        );
    }
}
export default DocViewer;