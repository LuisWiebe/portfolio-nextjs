const Navigation = (Props) => {
    const {active} = Props;
    console.log(Props, active);
    return (
        <nav>
            <div><img src="" alt="My Super Awesome Logo" /></div>
            <ul>
                <li><a href="/" style={{ color: active === 'home' ? "red" : "blue" }}>Home</a></li>
                <li><a href="/about" style= {{color: active === 'home' ? "red" : "blue"}}>About Me </a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;