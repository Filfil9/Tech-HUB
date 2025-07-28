function Home() {
  return (
    <>
            <Header />
            <section className="hero">
                <h2>Welcome to TECH HUB</h2>
                <p>Your Gateway To Technology Learning</p>
                <button>Join TECH HUB</button>
            </section>

            <section>
                <div className="main-content">
                <div className="card">
                    <h4>Courses</h4>
                    <p>Learn programming and tech skills</p>
                </div>
                <div className="card">
                    <h4>Projects</h4>
                    <p>Build real-world applications</p>
                </div>
                <div className="card">
                    <h4>Community</h4>
                    <p>Connect with tech enthusiasts</p>
                </div>
                <div className="card">
                    <h4>What I Learned</h4>
                    <ul>
                    <li>HTML Structure</li>
                    <li>CSS Styling</li>
                    <li>Responsive Layout</li>
                    <li><a href="what-i-learned.html" target="_blank" rel="noopener noreferrer">View Details →</a></li>
                    </ul>
                </div>
                </div>
            </section>
            <Footer />
            </>
        );
}

export default Home;
