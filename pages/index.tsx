import { FC } from "react"
import Head from "next/head"
import { Sidebar, Projects } from "@/presentation/components"

const Home: FC = () => (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div style={{display: "flex",}}>
                <Sidebar />
                <Projects />
            </div>
        </main>
    </>
)

export default Home 
