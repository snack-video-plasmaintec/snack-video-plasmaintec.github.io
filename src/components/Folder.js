import React, { Component } from 'react';
import ConnectedFolder from '../containers/Folder.js';
import ConnectedFile from '../containers/File.js';

export default class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContents: false
        };
        this.renameFolderHandler = this.renameFolderHandler.bind(this);
        this.addFolderHandler = this.addFolderHandler.bind(this);
        this.deleteFolderHandler = this.deleteFolderHandler.bind(this);
        this.addFileHandler = this.addFileHandler.bind(this);
        this.toggleShowContents = this.toggleShowContents.bind(this);
    }

    addFolderHandler() {
        const { folder, handleAddFolder } = this.props;
        const newName = window.prompt('ADD FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFolder(folder.id, newName);
    }

    renameFolderHandler(e) {
        const { folder, handleRenameFolder } = this.props;
        const newName = window.prompt('RENAME FOLDER') || '';
        if (!newName.trim()) {
            return;
        }
        handleRenameFolder(folder.id, newName);
    }

    deleteFolderHandler() {
        const { folder, handleDeleteFolder } = this.props;
        handleDeleteFolder(folder.id);
    }

    addFileHandler() {
        const { folder, handleAddFile } = this.props;
        const newName = window.prompt('ADD FILE') || '';
        if (!newName.trim()) {
            return;
        }
        handleAddFile(folder.id, newName);
    }

    toggleShowContents() {
        this.setState({ showContents: !this.state.showContents })
    }

    render() {
        const { showContents } = this.state;
        const { folder, files, showAll } = this.props;
        return (
            <div>
                <div onClick={this.toggleShowContents} onDoubleClick={this.renameFolderHandler}>
                    {`FOLDER ${folder.name} (${folder.id})`}
                </div>
                <button onClick={this.addFolderHandler}>+Folder</button>
                <button onClick={this.addFileHandler}>+File</button>
                <button onClick={this.deleteFolderHandler}>X</button>
                {
                    (showAll || showContents) && folder && folder.folders.map(id => (
                        <ConnectedFolder key={id} id={id} />
                    ))
                }    
                {
                    (showAll || showContents) && files && files.map(id => (
                        <ConnectedFile key={id} id={id} />
                    ))
                }                
            </div>
        )
    }
}