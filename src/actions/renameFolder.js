export const renameFolder = (oldFolderId, newFolderName) => ({
    type: 'RENAME_FOLDER',
    oldFolderId,
    newFolderName
})