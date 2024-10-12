import conf from "../conf/conf";
import { Client, ID, Databases, Storage ,Query } from "appwrite";

export class Service{
    client= new Client;
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectID);
      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDBID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("appwrite service :: createPost ::" ,error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDBID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("appwrite service :: updatePost ::" ,error);
            
        }
    }

    async deletePost(slug){
        try {
             await this.databases.deleteDocument(
                conf.appWriteDBID,
                conf.appWriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("appwrite service :: deletePost ::" ,error);
            return false
        }
    }   

    async getPost(slug){
        try {
            return this.databases.getDocument(
                conf.appWriteDBID,
                conf.appWriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getPost ::" ,error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    // file upload service

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appWriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('appwrite service :: uploadFile ::', error);
            
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketID,
                 fileId
            )
        } catch (error) {
            console.log("appWrite Service :: deleteFile ::", error);
            
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketID,
            fileId
        )
    }


}

const service = new Service()

export default Service