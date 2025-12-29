import {Suspense} from "react"
import EventDitails from "@/components/EventDitails";
const EventDetailPage = async ({params} : {params: Promise<{slug: string}>}) => {
    const slug = params.then(p => p.slug)
    return (
        <main>
            <Suspense fallback={<div>Loading..</div>}>
                <EventDitails params={slug}/>
            </Suspense>
        </main>
    )
}
export default EventDetailPage