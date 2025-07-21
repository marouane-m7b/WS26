import Navbar from "../../components/Navbar";

export default function ModPage() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '2rem', paddingTop: '6rem' }}>
                <h1>Moderator Dashboard</h1>
                <p>Welcome to the moderator panel. Here you can manage content, review reports, and moderate user activities.</p>
            </div>
        </div>
    );
}