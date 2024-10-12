const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDBID: String(import.meta.env.VITE_APPWRITE_DB_ID),
    appWriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf 