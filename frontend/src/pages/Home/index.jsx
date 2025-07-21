import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '2rem', paddingTop: '6rem' }}>
        <h1>Welcome to Our Platform</h1>
        <p>This is the home page. Navigate using the menu above to access different sections based on your role.</p>
      </div>
    </div>
  );
}
