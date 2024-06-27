import TableOfContent from "./TableOfContent.tsx";
import './Body.css'
import Table from "./Table.tsx";

export default function Body(){
    return(
        <>
            <h1>Dragonball Z</h1>
            <blockquote><h2>"Finde die 7 Dragonballs"</h2></blockquote>
            <h3>Inhalt</h3>
            <TableOfContent/>
            <p>Mit Klick auf die Namen wird man zum jeweiligen Dragonball Wiki Arikel weitergeleitet.</p>
            <Table/>
        </>
    )
}