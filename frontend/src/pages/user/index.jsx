import Navbar from "../../components/Navbar";

export default function UserPage() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '2rem', paddingTop: '6rem' }}>
                <h1>User Dashboard</h1>
                <p>Welcome to your personal dashboard. Here you can view your profile, settings, and personal content.</p>
            </div>
        </div>
    );
}