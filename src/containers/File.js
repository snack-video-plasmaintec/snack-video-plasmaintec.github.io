import { connect } from 'react-redux'
import { renameFile } from '../actions/renameFile'
import { deleteFile } from '../actions/deleteFile'
import { getFile, getParentFolder } from '../selectors'

import File from '../components/File.js'

const mapStateToProps = (state, ownProps) => ({
    file: getFile(state, +ownProps.id),
    parent: getParentFolder(state, +ownProps.id, false)
})

const mapDispatchToProps = (dispatch) => ({
    handleRenameFile: (fileId, newFileName) => dispatch(renameFile(fileId, newFileName)),
    handleDeleteFile: (fileId, folderId) => dispatch(deleteFile(fileId, folderId))
})

const ConnectedFile = connect(mapStateToProps, mapDispatchToProps)(File)

export default ConnectedFile