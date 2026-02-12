export default function User({ user }) {
    if(!user) return ;
    const { avatar_url, created_a,
        followers,
        following, name, type, html_url } = user;
    return <div className="user">
        <p>userName: {name}</p>
        <img src={avatar_url} alt="user"/>
        <div>
            <p> Followers: {followers}</p>
            <p> Following: {following}</p>
            <a href={html_url}>See profile</a>
        </div>
    </div>
}