import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav class="" id="navbar">
                <div class="left navbar-brand"><h3>CodverseTech</h3></div>

                <button class="navbar-toggler" id="navbar-toggler">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="currentcolor"
                    >
                        <path
                            d="M140-260v-54h680v54H140Zm0-194v-54h680v54H140Zm0-194v-54h680v54H140Z"
                        />
                    </svg>
                </button>

                <div class="middle">
                    <ul>
                        <li class="navlink active">Overview</li>
                        <li class="navlink">Shipping</li>
                        <li class="navlink">Tracking</li>
                        <li class="navlink">Analytics</li>
                        <li class="navlink">History</li>
                    </ul>
                </div>

                <div class="right">
                    <div class="actions">
                        <ul>
                            <li class="search-bar">
                                <input
                                    type="search"
                                    name="search"
                                    id=""
                                    placeholder="Type in something"
                                />
                                <i class="fa fas fa-search action-btn"></i>
                            </li>
                            <li class="action-btn"><i class="fa far fa-bell"></i></li>
                        </ul>
                    </div>

                    <div class="user-profile">
                        <span class="image"><img src="/eye.jpeg" alt="Profile" /></span>
                        <span class="username">
                            <b>Isaiah Kibet</b>
                            <p class="title text-sm">Head Admin</p>
                        </span>
                        <i class="fa fa-angle-down"></i>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;