export const addFolder = (parentFolderId, folderName) => ({
    type: 'ADD_FOLDER',
    parentFolderId,
    folderName
})