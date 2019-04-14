import { connect } from 'react-redux'
import { renameFolder } from '../actions/renameFolder'
import { addFolder } from '../actions/addFolder'
import { addFile } from '../actions/addFile'
import { toggleShowAll } from '../actions/toggleShowAll'
import { 
    getFolder, 
    getFiles,
    getDescendantFiles,
    getDescendantFolders
} from '../selectors'

import Root from '../components/Root.js'

const mapStateToProps = (state) => ({
    folder: getFolder(state, 0),
    files: getFiles(state, 0),
    descendantFolders: getDescendantFolders(state, 0),
    descendantFiles: getDescendantFiles(state, 0),
    showAll: state.showAll
})

const mapDispatchToProps = (dispatch) => ({
    handleAddFile: (folderId, fileName) => dispatch(addFile(folderId, fileName)),
    handleAddFolder: (folderId, fileName) => dispatch(addFolder(folderId, fileName)),
    handleRenameFolder: (oldFolderId, newFolderName) => dispatch(renameFolder(oldFolderId, newFolderName)),
    handleToggleShowAll: () => dispatch(toggleShowAll())
})

const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(Root)

export default ConnectedRoot