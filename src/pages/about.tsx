
import PageLayout from "@/components/PageLayout/PageLayout";

export default function About() {
    return (
        <>
            <h1>About</h1>
        </>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <PageLayout>
            {/* optional nested layout component */}
            {page}
        </PageLayout>
    )
}