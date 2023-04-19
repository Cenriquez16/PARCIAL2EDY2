import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            img: this.props.url,
            thumbnailUrl: this.props.thumbnailUrl
        };
    }

    hanldeChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [`${name}`]: value });
    }

    handleCancel() {
        this.setState({
            editing: false,
            title: this.props.title,
            img: this.props.url
        })
    }

    handleSave() {
        this.setState({
            editing: false
        })
    }

    handleEdit(event) {
        this.setState({ editing: true });
    }

    handleDelete(){
        this.setState({ deleted: true });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ title: newProps.title || "", body: newProps.url });
    }

    render() {
        return (
            this.state.editing ?
                <div className="col-xs-12 post">
                    <input name="title" className="form-control" value={this.state.title} onChange={this.hanldeChange.bind(this)} />
                    <image name="img" className="form-control" onChange={this.hanldeChange.bind(this)}>{this.props.thumbnailUrl}</image>
                    <div className="col-xs-12 button tar">
                        <button className="btn btn-default" onClick={this.handleCancel.bind(this)}>Cancelar</button>
                        <button className="btn btn-success" onClick={this.handleSave.bind(this)}>Guardar</button>
                    </div>
                </div>

                :
                <div className={"col-xs-12 post " + (this.state.deleted ? " hide" : "")}>
                    <div className="col-xs-11" title="click para editar" onClick={this.handleEdit.bind(this)}>
                    <p>{this.state.title}</p>
                        <img src= {this.props.thumbnailUrl} alt={this.state.title}></img>
                    </div>
                    <div className="col-xs-1 button">
                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Eliminar</button>
                    </div>
                </div>
        )
    }
}

export default Post;