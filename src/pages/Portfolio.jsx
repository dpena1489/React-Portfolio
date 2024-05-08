import Project from "../components/UI/Project";

export default function PortfolioPage(){
    return (
        <div>
            <main>
                <div>
                    These are my projects that I have worked on while attending NorthWestern University.                   <br />
                    <br />
                </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="card-deck">
                     <Project />
                    </div>
                </div>
            </div>
            </main>
        </div>
    )
}