export const renameFile = (oldFileId, newFileName) => ({
    type: 'RENAME_FILE',
    oldFileId,
    newFileName
})