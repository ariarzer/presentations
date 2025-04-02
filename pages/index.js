import Layout from "../components/base/Layuot/Layuot";
import Link from "next/link";

export default function home() {
    return (
        <Layout>
            <Link href='/presentations/css-value-processing/css-value-processing'>css-value-processing</Link>
            <Link href='/presentations/css-writing-modes/css-writing-modes'>css-writing-modes</Link>
            <Link href='/presentations/boxes-and-trees/boxes-and-trees'>boxes-and-trees</Link>
        </Layout>
    )
}