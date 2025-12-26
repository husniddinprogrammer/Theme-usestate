import './Footer.css';

function Footer({ darkTheme }) {
    return (
        <div>
            <div className={`${darkTheme ? "bg-white" : "bg-dark"} border-top`}>
                <div className="container">
                    <div className="row text-center pt-2 justify-content-around">

                        <div className={`${darkTheme ? "text-muted" : "text-light"} col py-2`}>
                            <i className="fa-solid fa-comment fs-5"></i><br />
                            <small>Chats</small>
                        </div>

                        <div className={`${darkTheme ? "text-muted" : "text-light"} col py-2`}>
                            <i className="fa-solid fa-phone fs-5"></i><br />
                            <small>Calls</small>
                        </div>

                        <div className={`${darkTheme ? "text-muted" : "text-light"} col py-2`}>
                            <i className="fa-solid fa-address-book fs-5"></i><br />
                            <small>Contacts</small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;