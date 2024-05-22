import Layout from "../components/base/Layuot/Layuot";
import Link from "next/link";

export default function home() {
    return (
        <Layout>
            <Link href='/presentations/css-value-processing'>css-value-processing</Link>
            <Link href='/presentations/css-writing'>css-writing-modes</Link>
        </Layout>
    )
}