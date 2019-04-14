import React, { Component } from 'react';

export default class File extends Component {
    constructor(props) {
        super(props);
        this.renameFileHandler = this.renameFileHandler.bind(this);
        this.deleteFileHandler = this.deleteFileHandler.bind(this);
    }

    renameFileHandler() {
        const { file, handleRenameFile } = this.props;
        const newName = window.prompt('RENAME FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleRenameFile(file.id, newName);
    }

    deleteFileHandler() {
        const { file, handleDeleteFile } = this.props;
        handleDeleteFile(file.id, file.parent);
    }

    render() {
        const { file } = this.props;
        return (
            <div onDoubleClick={this.renameFileHandler}>
                {file.name} 
                <button onClick={this.deleteFileHandler}>X</button>
            </div>
        )
    }
}