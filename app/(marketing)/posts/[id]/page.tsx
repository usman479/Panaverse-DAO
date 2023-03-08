import Link from "next/link"
import {posts} from "../../../data"
import styles from "./page.module.css"

export async function generateStaticParams() {
    const ids = ["1","2","3"];
    return ids.map((id) => ({id}));
}

async function getData(id:string) {
    const post = posts.find(item => item.id === id);
    return post;
}

export default async function Posts({params}:{params:{id:string}}) {
    const {id}  = params;
    const post = await getData(id);

    return (
        <>
        <div className={styles.main} >
        <h1>{post!.post}</h1>
        <p className={styles.description}>{post!.data}</p>
        <Link href="/" >back to home</Link>
        </div>
        </>
    )

}