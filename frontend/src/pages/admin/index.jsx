import Navbar from "../../components/Navbar";

export default function AdminPage() {
    return (
        <div>
            <Navbar />
            <div style={{ padding: '2rem', paddingTop: '6rem' }}>
                <h1>Admin Dashboard</h1>
                <p>Welcome to the admin panel. Here you can manage users, content, and system settings.</p>
            </div>
        </div>
    );
}